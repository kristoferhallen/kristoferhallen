// Design audit for a rendered page. Paste the whole file into the browser's
// JavaScript tool; the last expression returns a JSON report.
// Checks the rules in DESIGN.md: body size, line height, measure, contrast of
// every visible text style, faded text, faux bold, and heading structure.
// Run once per mode ('light', 'dark') at 375 px and at desktop width.
(async (mode = window.__designMode || 'light') => {
  const html = document.documentElement;
  // Colour transitions would make us read a colour halfway between modes.
  if (!document.getElementById('measure-no-transition')) {
    const st = document.createElement('style');
    st.id = 'measure-no-transition';
    st.textContent = '*, *::before, *::after { transition: none !important; }';
    document.head.appendChild(st);
  }
  html.classList.remove('light', 'dark');
  html.classList.add(mode);
  document.body.dataset.theme = mode;
  // Force style recalculation; requestAnimationFrame never fires in a hidden pane.
  void document.body.offsetHeight;
  await new Promise(r => setTimeout(r, 50));

  const rgb = c => (c.match(/[\d.]+/g) || []).map(Number);
  const lum = c => {
    const f = v => (v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    const [r, g, b] = rgb(c);
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => {
    const x = lum(a), y = lum(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  };
  const bgOf = el => {
    for (; el; el = el.parentElement) {
      const c = getComputedStyle(el).backgroundColor;
      const a = rgb(c);
      if (a.length && (a.length < 4 || a[3] > 0)) return c;
    }
    return 'rgb(255, 255, 255)';
  };
  const opacityOf = el => {
    let o = 1;
    for (; el; el = el.parentElement) o *= +getComputedStyle(el).opacity;
    return o;
  };
  const blend = (fg, bg, o) => {
    const f = rgb(fg), b = rgb(bg);
    return `rgb(${f.slice(0, 3).map((v, i) => Math.round(v * o + b[i] * (1 - o))).join(', ')})`;
  };
  const charWidth = s => {
    const cv = document.createElement('canvas').getContext('2d');
    cv.font = `${s.fontStyle} ${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
    const t = 'the quick brown fox jumps over a lazy dog, and then some more text here. ';
    return cv.measureText(t).width / t.length;
  };
  const label = el => el.tagName.toLowerCase() +
    (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/)[0] : '');

  // Body text: the first real paragraph in the article.
  const p = document.querySelector('.page-content p, article p, main p');
  let body = null;
  if (p) {
    const s = getComputedStyle(p);
    const w = p.getBoundingClientRect().width;
    body = {
      fontSize: parseFloat(s.fontSize),
      lineHeight: +(parseFloat(s.lineHeight) / parseFloat(s.fontSize)).toFixed(2),
      measure: Math.round(w / charWidth(s)),
      font: s.fontFamily.split(',')[0].replace(/"/g, ''),
    };
  }

  // Contrast of every distinct visible text style.
  const seen = new Map();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n; (n = walker.nextNode());) {
    if (!n.textContent.trim()) continue;
    const el = n.parentElement;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    if (!el.checkVisibility({ visibilityProperty: true })) continue;
    const s = getComputedStyle(el);
    const bg = bgOf(el);
    const o = opacityOf(el);
    const fg = o < 1 ? blend(s.color, bg, o) : s.color;
    const size = parseFloat(s.fontSize);
    const bold = +s.fontWeight >= 700;
    const large = size >= 24 || (bold && size >= 18.66);
    const need = large ? 3 : 4.5;
    const cr = ratio(fg, bg);
    const key = `${label(el)}|${fg}|${bg}|${size}`;
    if (!seen.has(key)) seen.set(key, {
      element: label(el), sample: n.textContent.trim().slice(0, 30),
      size, contrast: +cr.toFixed(2), need, faded: o < 1 ? +o.toFixed(2) : undefined,
      pass: cr >= need,
    });
  }
  const styles = [...seen.values()];

  // Weights used vs loaded (a missing weight is synthesised: faux bold).
  const loaded = new Set([...document.fonts].filter(f => f.status === 'loaded')
    .map(f => `${f.family.replace(/"/g, '')}|${f.weight}|${f.style}`));
  const fauxBold = [];
  document.querySelectorAll('h1,h2,h3,h4,strong,b,a,p,li,time,span').forEach(el => {
    const s = getComputedStyle(el);
    const fam = s.fontFamily.split(',')[0].replace(/"/g, '').trim();
    const famLoaded = [...loaded].some(k => k.toLowerCase().startsWith(fam.toLowerCase() + '|'));
    if (famLoaded && ![...loaded].some(k => k.toLowerCase() === `${fam}|${s.fontWeight}|${s.fontStyle}`.toLowerCase()))
      fauxBold.push(`${label(el)} ${s.fontWeight} ${s.fontStyle}`);
  });

  return JSON.stringify({
    url: location.pathname, mode, viewport: innerWidth,
    body,
    bodyChecks: body && {
      size: body.fontSize >= 16 ? 'ok' : 'too small',
      lineHeight: body.lineHeight >= 1.45 && body.lineHeight <= 1.7 ? 'ok' : 'outside 1.45–1.7',
      measure: body.measure <= 80 && (innerWidth < 600 || body.measure >= 55) ? 'ok' : 'outside 55–80',
    },
    contrastFailures: styles.filter(s => !s.pass),
    fadedText: styles.filter(s => s.faded).map(s => `${s.element} opacity ${s.faded}`),
    fauxBold: [...new Set(fauxBold)],
    h1Count: document.querySelectorAll('h1').length,
    thirdPartyRequests: [...new Set(performance.getEntriesByType('resource')
      .map(e => new URL(e.name).host).filter(h => h && h !== location.host))],
    stylesChecked: styles.length,
  }, null, 1);
})();
