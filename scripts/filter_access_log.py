#!/usr/bin/env python3
"""Filter nginx access logs down to real page views for GoatCounter import.

Reads combined-format log files, drops duplicate lines (Inleed's rotated
archives overlap), and prints the page views for the given dates.

A visitor counts as a real browser only if its IP has fetched the site's CSS
or JS somewhere in the logs. Most scrapers send a Chrome User-Agent but never
load assets, so this removes them; GoatCounter's own bot check handles the rest.

Usage: filter_access_log.py --from 2026-10-01 --to 2026-10-03 LOGFILE...
"""

import argparse
import re
import sys
from datetime import date, datetime

LINE = re.compile(
    r'^(?P<ip>\S+) \S+ \S+ \[(?P<time>[^\]]+)\] '
    r'"(?P<method>\S+) (?P<path>\S+)[^"]*" (?P<status>\d{3}) \S+ '
    r'"(?P<ref>[^"]*)" "(?P<ua>[^"]*)"'
)
ASSET = re.compile(r'\.(css|js)(\?|$)')


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
                    entries.append((line, m))

    browsers = {m['ip'] for _, m in entries
                if m['status'] in ('200', '304') and ASSET.search(m['path'])}

    out = []
    for line, m in entries:
        when = datetime.strptime(m['time'], '%d/%b/%Y:%H:%M:%S %z')
        if args.start <= when.date() <= args.end and m['ip'] in browsers and is_page(m):
            out.append((when, line))

    out.sort()
    for _, line in out:
        print(line)
    print(f'{len(entries)} log lines, {len(browsers)} browser IPs, '
          f'{len(out)} page views {args.start}..{args.end}', file=sys.stderr)


if __name__ == '__main__':
    main()
