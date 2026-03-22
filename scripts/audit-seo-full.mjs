import { chromium } from '@playwright/test';
import { readFileSync } from 'fs';
import { resolve } from 'path';

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

const KW_MAP = {
  '/': {
    primary: { kw: 'reproduction clé voiture nice', vol: 40, kd: null },
    secondary: [
      { kw: 'serrurier automobile nice', vol: 50 },
      { kw: 'double clé voiture nice', vol: 10 },
      { kw: 'clé voiture nice', vol: 10 },
      { kw: 'refaire clé voiture nice', vol: 0 },
    ],
  },
  '/reproduction-cle-voiture/': {
    primary: { kw: 'reproduction clé voiture', vol: 720, kd: 30 },
    secondary: [
      { kw: 'refaire clé de voiture', vol: 1300 },
      { kw: 'doubler clé voiture', vol: 480 },
      { kw: 'copie clé voiture', vol: 110 },
      { kw: 'clonage clé voiture', vol: 70 },
      { kw: 'gravure clé voiture', vol: 140 },
    ],
  },
  '/serrurier-automobile-nice/': {
    primary: { kw: 'serrurier automobile', vol: 2400, kd: 41 },
    secondary: [
      { kw: 'serrurier auto', vol: 1600 },
      { kw: 'serrurier voiture', vol: 1000 },
      { kw: 'serrurier clé voiture', vol: 260 },
      { kw: 'serrurier automobile nice', vol: 50 },
      { kw: 'réparation clé voiture', vol: 260 },
    ],
  },
  '/tarif-cle-voiture/': {
    primary: { kw: 'tarif reproduction clé voiture', vol: 1000, kd: 28 },
    secondary: [
      { kw: 'prix refaire une clé', vol: 880 },
      { kw: 'prix clé voiture', vol: 170 },
      { kw: 'double clé voiture prix', vol: 390 },
      { kw: 'refaire clé voiture prix', vol: 140 },
      { kw: 'tarif serrurier automobile', vol: 90 },
    ],
  },
  '/double-cle-voiture/': {
    primary: { kw: 'double clé voiture', vol: 1300, kd: 32 },
    secondary: [
      { kw: 'faire double clé voiture', vol: 390 },
      { kw: 'doubler clé voiture', vol: 480 },
      { kw: 'prix double clé voiture', vol: 390 },
      { kw: 'double clé voiture pas cher', vol: 110 },
      { kw: 'refaire double clé voiture', vol: 260 },
    ],
  },
  '/cle-voiture-perdue/': {
    primary: { kw: 'clé de voiture perdue sans double', vol: 880, kd: 30 },
    secondary: [
      { kw: 'clé voiture perdue', vol: 210 },
      { kw: 'perte de clé voiture', vol: 210 },
      { kw: 'j ai perdu mes clés de voiture', vol: 210 },
      { kw: 'clé voiture perdue sans double prix', vol: 210 },
      { kw: 'refaire clé voiture perdu', vol: 260 },
    ],
  },
  '/programmation-cle-voiture/': {
    primary: { kw: 'programmation clé voiture', vol: 720, kd: 14 },
    secondary: [
      { kw: 'reprogrammation clé voiture', vol: 210 },
      { kw: 'programmation clé de voiture', vol: 170 },
      { kw: 'comment reprogrammer clé voiture', vol: 390 },
      { kw: 'programmation clé voiture domicile', vol: 170 },
      { kw: 'programmateur clé voiture', vol: 260 },
    ],
  },
  '/cle-voiture-transpondeur/': {
    primary: { kw: 'clé voiture transpondeur', vol: 170, kd: 7 },
    secondary: [
      { kw: 'transpondeur clé voiture', vol: 210 },
      { kw: 'clé transpondeur', vol: 0 },
      { kw: 'immobiliseur clé voiture', vol: 0 },
      { kw: 'programmation transpondeur', vol: 0 },
    ],
  },
  '/cle-voiture-nice/': {
    primary: { kw: 'clé voiture nice', vol: 10, kd: null },
    secondary: [
      { kw: 'reproduction clé voiture antibes', vol: 50 },
      { kw: 'reproduction clé voiture cagnes sur mer', vol: 20 },
      { kw: 'clé voiture antibes', vol: 0 },
      { kw: 'clé voiture cannes', vol: 0 },
    ],
  },
  '/urgence-cle-voiture/': {
    primary: { kw: 'serrurier voiture urgence', vol: 210, kd: 7 },
    secondary: [
      { kw: 'urgences clé voiture', vol: 0 },
      { kw: 'dépannage clé voiture', vol: 70 },
      { kw: 'clé bloquée voiture', vol: 90 },
      { kw: 'voiture fermée clés dedans', vol: 390 },
    ],
  },
  '/depannage-cle-domicile/': {
    primary: { kw: 'dépannage clé voiture à domicile', vol: 70, kd: 20 },
    secondary: [
      { kw: 'programmation clé voiture domicile', vol: 170 },
      { kw: 'réparation clé voiture', vol: 260 },
      { kw: 'refaire clé voiture domicile', vol: 0 },
    ],
  },
  '/prix-cle-voiture/': {
    primary: { kw: 'prix clé voiture', vol: 260, kd: 21 },
    secondary: [
      { kw: 'prix double clé voiture', vol: 390 },
      { kw: 'prix refaire clé de voiture', vol: 210 },
      { kw: 'combien coute refaire clé voiture', vol: 70 },
      { kw: 'prix pour refaire une clé', vol: 210 },
    ],
  },
  '/prix-cle-vs-concessionnaire/': {
    primary: { kw: 'prix clé vs concessionnaire', vol: 0, kd: null },
    secondary: [
      { kw: 'refaire clé voiture concessionnaire prix', vol: 0 },
      { kw: 'comparatif prix clé voiture', vol: 0 },
      { kw: 'économiser clé voiture concessionnaire', vol: 0 },
    ],
  },
  '/refaire-cle-hyundai/': {
    primary: { kw: 'refaire clé hyundai', vol: 0, kd: 2 },
    secondary: [
      { kw: 'clé hyundai prix', vol: 0 },
      { kw: 'double clé hyundai', vol: 0 },
      { kw: 'programmation clé hyundai', vol: 0 },
    ],
  },
  '/refaire-cle-audi/': {
    primary: { kw: 'clé audi', vol: 0, kd: null },
    secondary: [
      { kw: 'refaire clé audi prix', vol: 110 },
      { kw: 'programmation clé audi', vol: 0 },
      { kw: 'double clé audi', vol: 0 },
    ],
  },
  '/refaire-cle-fiat/': {
    primary: { kw: 'clé fiat 500', vol: 0, kd: null },
    secondary: [
      { kw: 'refaire clé fiat 500 prix', vol: 50 },
      { kw: 'double clé fiat', vol: 0 },
      { kw: 'programmation clé fiat', vol: 0 },
    ],
  },
  '/refaire-cle-toyota/': {
    primary: { kw: 'clé toyota', vol: 0, kd: null },
    secondary: [
      { kw: 'refaire clé toyota prix', vol: 70 },
      { kw: 'double clé toyota', vol: 0 },
      { kw: 'programmation clé toyota', vol: 0 },
    ],
  },
  '/refaire-cle-mercedes/': {
    primary: { kw: 'clé mercedes', vol: 0, kd: null },
    secondary: [
      { kw: 'refaire clé mercedes prix', vol: 210 },
      { kw: 'double clé mercedes', vol: 0 },
      { kw: 'programmation clé mercedes', vol: 0 },
    ],
  },
  '/refaire-cle-renault/': {
    primary: { kw: 'clé renault', vol: 0, kd: null },
    secondary: [
      { kw: 'refaire clé renault prix', vol: 0 },
      { kw: 'double clé renault', vol: 0 },
      { kw: 'carte renault程序', vol: 0 },
    ],
  },
  '/acheter-une-voiture/': {
    primary: { kw: 'acheter voiture nice', vol: 0, kd: null },
    secondary: [
      { kw: 'voiture occasion nice', vol: 0 },
      { kw: 'véhicule d occasion nice', vol: 0 },
    ],
  },
  '/qui-sommes-nous/': {
    primary: { kw: 'sinnes automobiles', vol: 0, kd: null },
    secondary: [
      { kw: 'sinouhé rochereau', vol: 0 },
      { kw: 'serrurier nice', vol: 0 },
    ],
  },
  '/contactez-nous/': {
    primary: { kw: 'contact serrurier nice', vol: 0, kd: null },
    secondary: [
      { kw: 'devis clé voiture', vol: 0 },
      { kw: 'contact sinnes', vol: 0 },
    ],
  },
  '/mentions-legales-et-politique-de-confidentialite/': {
    primary: { kw: 'mentions légales sinnes', vol: 0, kd: null },
    secondary: [
      { kw: 'politique confidentialité', vol: 0 },
    ],
  },
};

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let semanticData = {};
  try {
    const raw = readFileSync(resolve('./seo_audit_semantique_profond.json'), 'utf-8');
    const arr = JSON.parse(raw);
    for (const entry of arr) {
      semanticData[entry.path] = entry;
    }
  } catch (e) {
    console.warn('semantic data not loaded:', e.message);
  }

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
      faqQuestions: [],
      keywords: KW_MAP[path] || { primary: { kw: '—', vol: 0, kd: null }, secondary: [] },
      densities: {},
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

      entry.faqQuestions = await page.$$eval(
        '[class*="accordion"] li, [class*="faq"] li, details summary, .faq-item, [class*="FAQ"]',
        (els) => els.map((el) => el.textContent?.trim() ?? '').filter(Boolean)
      );

      const links = await page.$$eval('a[href]', (els) =>
        els
          .map((el) => ({ href: el.getAttribute('href') ?? '', text: el.textContent?.trim() ?? '' }))
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

      const sem = semanticData[path];
      if (sem) {
        const cats = sem.analyse_metamots;
        for (const cat of Object.values(cats)) {
          if (typeof cat === 'object' && cat !== null) {
            for (const [word, data] of Object.entries(cat)) {
              if (word.startsWith('_')) continue;
              if (data && typeof data === 'object' && 'density' in data) {
                entry.densities[word] = data.density;
              }
            }
          }
        }
      }

    } catch (e) {
      entry.error = e instanceof Error ? e.message : String(e);
    }

    results.push(entry);
    console.log(`Scanned: ${path}${entry.error ? ` [ERROR: ${entry.error}]` : ''}`);
  }

  await browser.close();

  const pageCards = results.map((r) => {
    const label = r.path === '/' ? 'ACCUEIL' : r.path.replace(/\//g, '').replace(/-/g, ' ').toUpperCase();
    const anchor = r.path === '/' ? 'accueil' : r.path.replace(/\//g, '-').replace(/-$/, '');

    if (r.error) {
      return `
<div class="page-card" id="${anchor}">
  <h2>${label}</h2>
  <p class="url">${r.url}</p>
  <p class="error">ERREUR : ${r.error}</p>
</div>`;
    }

    const { primary, secondary } = r.keywords;

    const primaryVol = primary.vol > 0 ? `${primary.vol.toLocaleString('fr-FR')}` : '—';

    const secRows = secondary
      .filter((s) => s.kw !== '—')
      .map((s) => `<tr><td>${s.kw}</td><td>${s.vol > 0 ? s.vol.toLocaleString('fr-FR') : '—'}</td></tr>`)
      .join('');

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

    const faqRows = r.faqQuestions.length > 0
      ? r.faqQuestions.map((q) => `<tr><td>${q}</td><td>—</td></tr>`).join('')
      : '<tr><td colspan="2"><em>vide</em></td></tr>';

    const densityRows = Object.entries(r.densities)
      .map(([word, density]) => `<tr><td>${word}</td><td>${density}</td></tr>`)
      .join('') || '<tr><td colspan="2"><em>vide</em></td></tr>';

    return `
<div class="page-card" id="${anchor}">
  <h2>${label}</h2>
  <p class="url">${r.url}</p>

  <div class="card-grid">
    <div class="card-col">
      <div class="section-block">
        <strong>SEO ON-PAGE</strong>
        <table class="mini-table">
          <tr><th>Title</th><td>${r.title || '<em>vide</em>'}</td></tr>
          <tr><th>Meta</th><td>${r.metaDescription || '<em>vide</em>'}</td></tr>
          <tr><th>H1</th><td>${r.h1 || '<em>vide</em>'}</td></tr>
        </table>
      </div>

      <div class="section-block">
        <strong>MOTS-CLÉS PRINCIPAUX</strong>
        <table class="mini-table">
          <tr><th>Primaire</th><td class="kw-primary">${primary.kw}</td></tr>
          <tr><th>Volume</th><td>${primaryVol}</td></tr>
          ${primary.kd ? `<tr><th>KD</th><td>${primary.kd}</td></tr>` : ''}
        </table>
        <strong>Secondaires</strong>
        <table class="mini-table">
          <tr><th>Kw</th><th>Vol</th></tr>
          ${secRows || '<tr><td colspan="2"><em>vide</em></td></tr>'}
        </table>
      </div>

      <div class="section-block">
        <strong>H2 (${r.h2.length})</strong>
        <ul class="h-list">${h2Items || '<li><em>vide</em></li>'}</ul>
      </div>

      <div class="section-block">
        <strong>H3 (${r.h3.length})</strong>
        <ul class="h-list">${h3Items || '<li><em>vide</em></li>'}</ul>
      </div>
    </div>

    <div class="card-col">
      <div class="section-block">
        <strong>DENSITÉS SÉMANTIQUES</strong>
        <table class="mini-table">
          <tr><th>Terme</th><th>Densité</th></tr>
          ${densityRows}
        </table>
      </div>

      <div class="section-block">
        <strong>FAQ — Questions (${r.faqQuestions.length})</strong>
        <table class="mini-table">
          <tr><th>Question</th><th>Vol</th></tr>
          ${faqRows}
        </table>
      </div>

      <div class="section-block">
        <strong>LIENS INTERNES (${r.internalLinks.length})</strong>
        <table class="mini-table mini-table-scroll">
          <tr><th>Ancre</th><th>Cible</th></tr>
          ${intLinks || '<tr><td colspan="2"><em>vide</em></td></tr>'}
        </table>
      </div>

      <div class="section-block">
        <strong>LIENS EXTERNES (${r.externalLinks.length})</strong>
        <table class="mini-table mini-table-scroll">
          <tr><th>Ancre</th><th>Cible</th></tr>
          ${extLinks || '<tr><td colspan="2"><em>vide</em></td></tr>'}
        </table>
      </div>
    </div>
  </div>

  <div class="comment-zone">
    <strong>COMMENTAIRES</strong>
    <div class="comment-lines">
      <div class="line"></div><div class="line"></div><div class="line"></div>
      <div class="line"></div><div class="line"></div><div class="line"></div>
    </div>
  </div>
</div>`;
  }).join('\n');

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Audit SEO Sinnes.fr — ${new Date().toLocaleDateString('fr-FR')}</title>
<style>
  @page { size: A4 landscape; margin: 10mm; }
  @media print {
    .page-card { page-break-before: always; page-break-inside: avoid; }
    .page-card:first-child { page-break-before: auto; }
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    font-size: 9px;
    color: #1a1a1a;
    background: #f4f4f4;
    padding: 8mm;
  }

  .site-header {
    text-align: center;
    margin-bottom: 10px;
    padding: 6px 12px;
    background: #1a3a1a;
    color: #fff;
    border-radius: 4px;
  }
  .site-header h1 { font-size: 14px; }
  .site-header p { font-size: 8px; opacity: 0.8; }

  .toc {
    background: #fff;
    border: 2px solid #2d7a2d;
    border-radius: 4px;
    padding: 6px 10px;
    margin-bottom: 10px;
    columns: 4;
    font-size: 8px;
  }
  .toc a { color: #2d7a2d; text-decoration: none; }
  .toc a:hover { text-decoration: underline; }

  .page-card {
    background: #fff;
    border: 2px solid #2d7a2d;
    border-radius: 6px;
    padding: 8px 10px;
    margin-bottom: 8px;
  }

  .page-card h2 {
    font-size: 12px;
    color: #2d7a2d;
    border-bottom: 1px solid #2d7a2d;
    padding-bottom: 3px;
    margin-bottom: 3px;
  }
  .url { font-size: 7px; color: #888; margin-bottom: 6px; }

  .card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  .card-col { display: flex; flex-direction: column; gap: 4px; }

  .section-block {
    background: #f9f9f9;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    padding: 4px 6px;
    font-size: 8px;
  }
  .section-block strong {
    color: #2d7a2d;
    font-size: 8px;
    display: block;
    margin-bottom: 3px;
    border-bottom: 1px dashed #2d7a2d;
    padding-bottom: 2px;
  }

  .mini-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.5px;
    margin-bottom: 2px;
  }
  .mini-table th {
    color: #555;
    text-align: left;
    padding: 1px 3px;
    width: 60px;
    font-weight: normal;
    background: #f0f0f0;
  }
  .mini-table td {
    padding: 1px 3px;
    vertical-align: top;
    word-break: break-word;
    font-size: 7.5px;
  }
  .mini-table-scroll { display: block; max-height: 50px; overflow-y: auto; }
  .kw-primary { font-weight: bold; color: #155724; }

  ul.h-list {
    list-style: none;
    padding: 0;
    columns: 1;
  }
  ul.h-list li {
    padding: 0.5px 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 7.5px;
    word-break: break-word;
  }

  .comment-zone {
    background: #f0fff0;
    border: 1px dashed #2d7a2d;
    border-radius: 4px;
    padding: 5px;
    margin-top: 4px;
  }
  .comment-zone strong { color: #2d7a2d; font-size: 8px; display: block; margin-bottom: 3px; }
  .comment-lines { display: flex; flex-direction: column; gap: 4px; }
  .line { border-bottom: 1px solid #ccc; height: 12px; }
  .line:last-child { border-bottom: none; }

  .error { color: #c0392b; font-weight: bold; padding: 4px; background: #fdecea; border-radius: 3px; margin-top: 4px; }
  em { color: #999; font-style: italic; font-size: 7px; }
</style>
</head>
<body>

<div class="site-header">
  <h1>Audit SEO — Sinnes.fr</h1>
  <p>Généré le ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · 23 pages · Vol. = volume mensuel</p>
</div>

<div class="toc">
  ${results.map((r) => {
    const lbl = r.path === '/' ? 'Accueil' : r.path.replace(/\//g, '').replace(/-/g, ' ');
    const a = r.path === '/' ? 'accueil' : r.path.replace(/\//g, '-').replace(/-$/, '');
    const s = r.error ? '❌' : '✅';
    return `<a href="#${a}">${lbl}</a> ${s}&nbsp;`;
  }).join('')}
</div>

${pageCards}

</body>
</html>`;

  const fs = await import('fs');
  fs.writeFileSync('audit-seo-sinnes.html', html, 'utf-8');
  console.log(`\n✅ audit-seo-sinnes.html généré`);
})();
