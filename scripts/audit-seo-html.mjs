import { chromium } from '@playwright/test';

const PAGES = [
  '/',
  '/reproduction-cle-voiture/',
  '/serrurier-automobile-nice/',
  '/tarif-cle-voiture/',
  '/double-cle-voiture/',
  '/cle-voiture-perdue/',
  '/programmation-cle-voiture/',
  '/cle-voiture-transpondeur/',
  '/cle-voiture-nice/',
  '/urgence-cle-voiture/',
  '/depannage-cle-domicile/',
  '/prix-cle-voiture/',
  '/prix-cle-vs-concessionnaire/',
  '/refaire-cle-hyundai/',
  '/refaire-cle-audi/',
  '/refaire-cle-fiat/',
  '/refaire-cle-toyota/',
  '/refaire-cle-mercedes/',
  '/refaire-cle-renault/',
  '/acheter-une-voiture/',
  '/qui-sommes-nous/',
  '/contactez-nous/',
  '/mentions-legales-et-politique-de-confidentialite/',
];

const BASE_URL = 'http://localhost:3000';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = [];

  for (const path of PAGES) {
    const url = `${BASE_URL}${path}`;
    let entry = {
      path,
      url,
      title: '',
      metaDescription: '',
      h1: '',
      h2: [],
      h3: [],
      internalLinks: [],
      externalLinks: [],
      error: '',
    };

    try {
      const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
      if (!response || response.status() !== 200) {
        entry.error = `HTTP ${response?.status() ?? 'no response'}`;
        results.push(entry);
        continue;
      }

      entry.title = await page.title();

      entry.metaDescription = await page
        .$eval('meta[name="description"]', (el) => el.getAttribute('content') ?? '')
        .catch(() => '');

      const h1s = await page.$$eval('h1', (els) =>
        els.map((el) => el.textContent?.trim() ?? '').filter(Boolean)
      );
      entry.h1 = h1s.join(' | ');

      const h2s = await page.$$eval('h2', (els) =>
        els.map((el) => el.textContent?.trim() ?? '').filter(Boolean)
      );
      entry.h2 = h2s;

      const h3s = await page.$$eval('h3', (els) =>
        els.map((el) => el.textContent?.trim() ?? '').filter(Boolean)
      );
      entry.h3 = h3s;

      const links = await page.$$eval('a[href]', (els) =>
        els
          .map((el) => ({
            href: el.getAttribute('href') ?? '',
            text: el.textContent?.trim() ?? '',
          }))
          .filter((l) => l.href && l.text)
      );

      const currentHost = new URL(BASE_URL).host;

      for (const l of links) {
        try {
          const absolute = l.href.startsWith('/') ? BASE_URL + l.href : l.href;
          const linkHost = new URL(absolute).host;
          if (linkHost === currentHost || l.href.startsWith('/')) {
            entry.internalLinks.push({ href: l.href, text: l.text });
          } else {
            entry.externalLinks.push({ href: l.href, text: l.text });
          }
        } catch {
          entry.internalLinks.push({ href: l.href, text: l.text });
        }
      }

    } catch (e) {
      entry.error = e instanceof Error ? e.message : String(e);
    }

    results.push(entry);
    console.log(`Scanned: ${path}${entry.error ? ` [ERROR: ${entry.error}]` : ''}`);
  }

  await browser.close();

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Audit SEO Sinnes.fr — ${new Date().toLocaleDateString('fr-FR')}</title>
<style>
  @page { size: A4; margin: 15mm; }
  @media print {
    .page-section { page-break-after: always; }
    .page-section:last-child { page-break-after: auto; }
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 11px;
    color: #1a1a1a;
    background: #f4f4f4;
    padding: 10mm;
  }

  .site-header {
    text-align: center;
    margin-bottom: 12px;
    padding: 8px;
    background: #1a3a1a;
    color: #fff;
    border-radius: 4px;
  }
  .site-header h1 { font-size: 16px; }
  .site-header p { font-size: 10px; opacity: 0.8; }

  .toc {
    background: #fff;
    border: 1px solid #2d7a2d;
    border-radius: 4px;
    padding: 8px 12px;
    margin-bottom: 12px;
    columns: 3;
    font-size: 10px;
  }
  .toc a { color: #2d7a2d; text-decoration: none; }
  .toc a:hover { text-decoration: underline; }
  .toc span { color: #888; font-size: 9px; }

  .page-section {
    background: #fff;
    border: 2px solid #2d7a2d;
    border-radius: 6px;
    padding: 10px 12px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 14px;
    color: #2d7a2d;
    border-bottom: 1px solid #2d7a2d;
    padding-bottom: 4px;
    margin-bottom: 4px;
  }

  .url {
    font-size: 9px;
    color: #666;
    margin-bottom: 8px;
  }

  .error {
    color: #c0392b;
    font-weight: bold;
    padding: 8px;
    background: #fdecea;
    border-radius: 4px;
    margin-top: 8px;
  }

  .meta-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 8px;
    font-size: 10px;
  }
  .meta-table th {
    background: #e8f5e9;
    color: #2d7a2d;
    text-align: left;
    padding: 3px 6px;
    width: 80px;
    font-size: 9px;
  }
  .meta-table td {
    padding: 3px 6px;
    vertical-align: top;
    word-break: break-word;
  }

  .headings {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
  }
  .hblock {
    flex: 1;
    background: #f9f9f9;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    padding: 6px 8px;
    font-size: 9px;
  }
  .hblock strong {
    color: #2d7a2d;
    display: block;
    margin-bottom: 3px;
    font-size: 9px;
  }
  .hblock ul {
    list-style: none;
    padding: 0;
  }
  .hblock li {
    padding: 1px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .hblock li:last-child { border-bottom: none; }

  .links {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
  }
  .links-col {
    flex: 1;
    font-size: 9px;
  }
  .links-col strong {
    color: #2d7a2d;
    display: block;
    margin-bottom: 3px;
  }
  .links table {
    width: 100%;
    border-collapse: collapse;
    font-size: 9px;
  }
  .links table td:first-child {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #155724;
    padding: 1px 3px;
  }
  .links table td:last-child {
    font-size: 8px;
    color: #555;
    word-break: break-all;
    padding: 1px 3px;
  }

  .comments strong {
    color: #2d7a2d;
    font-size: 9px;
    display: block;
    margin-bottom: 3px;
  }
  .comment-lines {
    background: #f0fff0;
    border: 1px dashed #2d7a2d;
    border-radius: 4px;
    padding: 6px;
  }
  .line {
    border-bottom: 1px solid #ddd;
    height: 16px;
    margin-bottom: 4px;
  }
  .line:last-child { border-bottom: none; margin-bottom: 0; }

  em { color: #999; font-style: italic; }
</style>
</head>
<body>

<div class="site-header">
  <h1>Audit SEO — Sinnes.fr</h1>
  <p>Généré le ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · 23 pages</p>
</div>

<div class="toc">
  ${results.map((r) => {
    const label = r.path === '/' ? 'Accueil' : r.path.replace(/\//g, '').replace(/-/g, ' ');
    const status = r.error ? '❌' : '✅';
    return `<a href="#${(r.path === '/' ? 'accueil' : r.path.replace(/\//g, '-').replace(/-$/, ''))}">${label}</a> ${status} &nbsp;`;
  }).join('')}
</div>

${results.map((r) => {
  const label = r.path === '/' ? 'ACCUEIL' : r.path.replace(/\//g, '').replace(/-/g, ' ').toUpperCase();
  const anchor = r.path === '/' ? 'accueil' : r.path.replace(/\//g, '-').replace(/-$/, '');

  if (r.error) {
    return `
<div class="page-section" id="${anchor}">
  <h2>${label}</h2>
  <p class="url">${r.url}</p>
  <p class="error">ERREUR : ${r.error}</p>
</div>`;
  }

  const h2Items = r.h2.map((h) => `<li>${h}</li>`).join('');
  const h3Items = r.h3.map((h) => `<li>${h}</li>`).join('');

  const seenInt = new Set();
  const intLinks = r.internalLinks
    .filter((l) => {
      const k = `${l.text}→${l.href}`;
      if (seenInt.has(k)) return false;
      seenInt.add(k);
      return true;
    })
    .map((l) => `<tr><td>${l.text}</td><td>${l.href}</td></tr>`)
    .join('');

  const seenExt = new Set();
  const extLinks = r.externalLinks
    .filter((l) => {
      const k = `${l.text}→${l.href}`;
      if (seenExt.has(k)) return false;
      seenExt.add(k);
      return true;
    })
    .map((l) => `<tr><td>${l.text}</td><td>${l.href}</td></tr>`)
    .join('');

  return `
<div class="page-section" id="${anchor}">
  <h2>${label}</h2>
  <p class="url">${r.url}</p>

  <table class="meta-table">
    <tr><th>Title</th><td>${r.title || '<em>vide</em>'}</td></tr>
    <tr><th>Meta Desc</th><td>${r.metaDescription || '<em>vide</em>'}</td></tr>
    <tr><th>H1</th><td>${r.h1 || '<em>vide</em>'}</td></tr>
  </table>

  <div class="headings">
    <div class="hblock">
      <strong>H2 (${r.h2.length})</strong>
      ${r.h2.length > 0 ? `<ul>${h2Items}</ul>` : '<em>vide</em>'}
    </div>
    <div class="hblock">
      <strong>H3 (${r.h3.length})</strong>
      ${r.h3.length > 0 ? `<ul>${h3Items}</ul>` : '<em>vide</em>'}
    </div>
  </div>

  <div class="links">
    <div class="links-col">
      <strong>Liens internes (${r.internalLinks.length})</strong>
      ${r.internalLinks.length > 0 ? `<table>${intLinks}</table>` : '<em>vide</em>'}
    </div>
    <div class="links-col">
      <strong>Liens externes (${r.externalLinks.length})</strong>
      ${r.externalLinks.length > 0 ? `<table>${extLinks}</table>` : '<em>vide</em>'}
    </div>
  </div>

  <div class="comments">
    <strong>Commentaires</strong>
    <div class="comment-lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </div>
</div>
`;
}).join('')}

</body>
</html>`;

  const fs = await import('fs');
  fs.writeFileSync('audit-seo-sinnes.html', html, 'utf-8');
  console.log(`\n✅ Version HTML print générée : audit-seo-sinnes.html`);
})();
