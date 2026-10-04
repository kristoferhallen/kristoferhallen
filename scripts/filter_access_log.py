#!/usr/bin/env python3
"""Filter nginx access logs down to real page views for GoatCounter import.

Reads combined-format log files, drops duplicate lines (Inleed's rotated
archives overlap), and prints the page views for the given dates.

A visitor counts as a real browser only if its IP has fetched the site's CSS
or JS somewhere in the logs. Most scrapers send a Chrome User-Agent but never
load assets, so this removes them; GoatCounter's own bot check handles the rest.

Usage: filter_access_log.py --from 2026-10-01 --to 2026-10-03 LOGFILE...

Prints the matching log lines. With --site, sends them to GoatCounter's API
instead (needs GOATCOUNTER_API_KEY with "Record pageviews" permission).
"""

import argparse
import json
import os
import re
import sys
import urllib.request
from datetime import date, datetime

LINE = re.compile(
    r'^(?P<ip>\S+) \S+ \S+ \[(?P<time>[^\]]+)\] '
    r'"(?P<method>\S+) (?P<path>\S+)[^"]*" (?P<status>\d{3}) \S+ '
    r'"(?P<ref>[^"]*)" "(?P<ua>[^"]*)"'
)
ASSET = re.compile(r'\.(css|js)(\?|$)')
BATCH = 100


def is_page(m):
    path = m['path'].split('?')[0]
    return (
        m['method'] == 'GET'
        and m['status'] in ('200', '304')
        and (path.endswith('/') or path.endswith('.html'))
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--from', dest='start', required=True, type=date.fromisoformat)
    ap.add_argument('--to', dest='end', required=True, type=date.fromisoformat)
    ap.add_argument('--site', help='GoatCounter URL to send page views to')
    ap.add_argument('logs', nargs='+')
    args = ap.parse_args()

    seen = set()
    entries = []
    for name in args.logs:
        with open(name, encoding='utf-8', errors='replace') as f:
            for line in f:
                line = line.rstrip('\n')
                if not line or line in seen:
                    continue
                seen.add(line)
                m = LINE.match(line)
                if m:
                    entries.append(m)

    browsers = {m['ip'] for m in entries
                if m['status'] in ('200', '304') and ASSET.search(m['path'])}

    out = []
    for m in entries:
        when = datetime.strptime(m['time'], '%d/%b/%Y:%H:%M:%S %z')
        if args.start <= when.date() <= args.end and m['ip'] in browsers and is_page(m):
            out.append((when, m))

    out.sort(key=lambda x: x[0])
    print(f'{len(entries)} log lines, {len(browsers)} browser IPs, '
          f'{len(out)} page views {args.start}..{args.end}', file=sys.stderr)
    if args.site:
        send(args.site, out)
    else:
        for _, m in out:
            print(m.string)


def send(site, views):
    """POST page views to GoatCounter's /api/v0/count in batches."""
    key = os.environ['GOATCOUNTER_API_KEY']
    hits = []
    for when, m in views:
        path, _, query = m['path'].partition('?')
        ref = '' if m['ref'] == '-' else m['ref']
        hits.append({
            'path': re.sub('/{2,}', '/', path),
            'query': query,
            'ref': ref,
            'ip': m['ip'],
            'user_agent': m['ua'],
            'created_at': when.isoformat(),
        })
    for i in range(0, len(hits), BATCH):
        body = json.dumps({'hits': hits[i:i + BATCH]}).encode()
        req = urllib.request.Request(
            site.rstrip('/') + '/api/v0/count', data=body, method='POST',
            headers={'Content-Type': 'application/json',
                     'Authorization': 'Bearer ' + key})
        with urllib.request.urlopen(req) as resp:
            print(f'sent {len(hits[i:i + BATCH])} hits: HTTP {resp.status}',
                  file=sys.stderr)


if __name__ == '__main__':
    main()
