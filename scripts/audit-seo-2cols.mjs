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

const PRIMARY_KW = {
  '/': 'reproduction clé voiture nice',
  '/reproduction-cle-voiture/': 'reproduction clé voiture',
  '/serrurier-automobile-nice/': 'serrurier automobile',
  '/tarif-cle-voiture/': 'tarif reproduction clé voiture',
  '/double-cle-voiture/': 'doubler clé voiture',
  '/cle-voiture-perdue/': 'clé voiture perdue sans double',
  '/programmation-cle-voiture/': 'programmation clé voiture',
  '/cle-voiture-transpondeur/': 'clé voiture transpondeur',
  '/cle-voiture-nice/': 'clé voiture nice',
  '/urgence-cle-voiture/': 'serrurier voiture urgence',
  '/depannage-cle-domicile/': 'dépannage clé voiture domicile',
  '/prix-cle-voiture/': 'prix clé voiture',
  '/prix-cle-vs-concessionnaire/': 'prix clé vs concessionnaire',
  '/refaire-cle-hyundai/': 'refaire clé hyundai',
  '/refaire-cle-audi/': 'clé audi',
  '/refaire-cle-fiat/': 'clé fiat 500',
  '/refaire-cle-toyota/': 'clé toyota',
  '/refaire-cle-mercedes/': 'clé mercedes',
  '/refaire-cle-renault/': 'clé renault',
  '/acheter-une-voiture/': 'acheter voiture nice',
  '/qui-sommes-nous/': 'sinnes automobiles',
  '/contactez-nous/': 'contact serrurier nice',
  '/mentions-legales-et-politique-de-confidentialite/': 'mentions légales sinnes',
};

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let semanticData = {};
  try {
    const raw = readFileSync(resolve('./seo_audit_semantique_profond.json'), 'utf-8');
    const arr = JSON.parse(raw);
    for (const entry of arr) semanticData[entry.path] = entry;
  } catch (e) { /* silent */ }

  const results = [];

  for (const path of PAGES) {
    const url = `${BASE_URL}${path}`;
    let entry = {
      path, url,
      title: '', metaDescription: '', h1: '',
      h2: [], h3: [],
      internalLinks: [], externalLinks: [],
      faqQuestions: [], densities: {},
      primaryKw: PRIMARY_KW[path] || '—',
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
      entry.metaDescription = await page.$eval('meta[name="description"]', (el) => el.getAttribute('content') ?? '').catch(() => '');
      entry.h1 = (await page.$$eval('h1', (els) => els.map((el) => el.textContent?.trim() ?? '').filter(Boolean))).join(' | ');
      entry.h2 = await page.$$eval('h2', (els) => els.map((el) => el.textContent?.trim() ?? '').filter(Boolean));
      entry.h3 = await page.$$eval('h3', (els) => els.map((el) => el.textContent?.trim() ?? '').filter(Boolean));
      entry.faqQuestions = await page.$$eval('[class*="accordion"] li, [class*="faq"] li, details summary, .faq-item', (els) => els.map((el) => el.textContent?.trim() ?? '').filter(Boolean));

      const links = await page.$$eval('a[href]', (els) => els.map((el) => ({ href: el.getAttribute('href') ?? '', text: el.textContent?.trim() ?? '' })).filter((l) => l.href && l.text));
      const currentHost = new URL(BASE_URL).host;
      for (const l of links) {
        try {
          const absolute = l.href.startsWith('/') ? BASE_URL + l.href : l.href;
          if (new URL(absolute).host === currentHost || l.href.startsWith('/')) entry.internalLinks.push(l);
          else entry.externalLinks.push(l);
        } catch { entry.internalLinks.push(l); }
      }

      const sem = semanticData[path];
      if (sem) {
        for (const cat of Object.values(sem.analyse_metamots || {})) {
          if (cat && typeof cat === 'object') {
            for (const [word, data] of Object.entries(cat)) {
              if (!word.startsWith('_') && data && typeof data === 'object' && 'density' in data) {
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
  const fs = await import('fs');

  function esc(s) {
    return String(s).replace(/\|/g, '\\|').replace(/\n/g, '<br>');
  }

  function section(title, content) {
    return `<tr><td colspan="2" style="background:#e8f5e9;color:#1a3a1a;font-weight:bold;font-size:9px;padding:3px 5px;border:1px solid #2d7a2d;">${esc(title)}</td></tr>\n${content}`;
  }

  function kvRow(k, v) {
    return `<tr><td style="font-size:8px;color:#555;padding:2px 5px;width:70px;background:#f8f8f8;">${esc(k)}</td><td style="font-size:8px;padding:2px 5px;">${esc(v || '<em>vide</em>')}</td></tr>`;
  }

  function listRow(label, items) {
    const text = items.length > 0 ? items.map((i) => `• ${esc(i)}`).join('<br>') : '<em>vide</em>';
    return `<tr><td style="font-size:8px;color:#555;padding:2px 5px;background:#f8f8f8;">${esc(label)}</td><td style="font-size:8px;padding:2px 5px;">${text}</td></tr>`;
  }

  function pageCard(r, num) {
    const label = r.path === '/' ? 'ACCUEIL' : r.path.replace(/\//g, '').replace(/-/g, ' ').toUpperCase();
    const anchor = `p${num}`;

    if (r.error) {
      return `<!-- ${anchor} -->
<table style="width:100%;border:2px solid #2d7a2d;border-radius:6px;collapse:collapse;font-family:'Segoe UI',Arial,sans-serif;margin-bottom:8px;" cellpadding="0" cellspacing="0">
<tr><td style="padding:6px 8px;background:#2d7a2d;color:#fff;font-weight:bold;font-size:11px;" colspan="2">${num}. ${esc(label)} — ${esc(r.url)}</td></tr>
<tr><td style="padding:10px;color:#c0392b;font-weight:bold;" colspan="2">ERREUR: ${esc(r.error)}</td></tr>
</table>`;
    }

    const seenInt = new Set();
    const intLinks = r.internalLinks
      .filter((l) => { const k = `${l.text}|${l.href}`; if (seenInt.has(k)) return false; seenInt.add(k); return true; })
      .map((l) => `<b>${esc(l.text)}</b> → ${esc(l.href)}`).join('<br>') || '<em>vide</em>';

    const seenExt = new Set();
    const extLinks = r.externalLinks
      .filter((l) => { const k = `${l.text}|${l.href}`; if (seenExt.has(k)) return false; seenExt.add(k); return true; })
      .map((l) => `<b>${esc(l.text)}</b> → ${esc(l.href)}`).join('<br>') || '<em>vide</em>';

    const densities = Object.entries(r.densities)
      .sort((a, b) => parseFloat(b[1]) - parseFloat(a[1]))
      .slice(0, 15)
      .map(([w, d]) => `${w}: <b>${d}</b>`)
      .join('<br>') || '<em>vide</em>';

    const rows = [
      kvRow('MC Principal', r.primaryKw),
      kvRow('Title', r.title),
      kvRow('Meta Desc', r.metaDescription),
      kvRow('H1', r.h1),
      section('H2 (' + r.h2.length + ')', listRow('', r.h2)),
      section('H3 (' + r.h3.length + ')', listRow('', r.h3)),
      section('FAQ (' + r.faqQuestions.length + ')', listRow('', r.faqQuestions)),
      section('Densités (top 15)', '<td colspan="2" style="font-size:8px;padding:2px 5px;">' + densities + '</td>'),
      section('Liens internes (' + r.internalLinks.length + ')', '<td colspan="2" style="font-size:8px;padding:2px 5px;">' + intLinks + '</td>'),
      section('Liens externes (' + r.externalLinks.length + ')', '<td colspan="2" style="font-size:8px;padding:2px 5px;">' + extLinks + '</td>'),
    ];

    return `<!-- ${anchor} -->
<table style="width:100%;border:2px solid #2d7a2d;border-radius:6px;collapse:collapse;font-family:'Segoe UI',Arial,sans-serif;margin-bottom:8px;" cellpadding="0" cellspacing="0">
<tr><td style="padding:6px 8px;background:#2d7a2d;color:#fff;font-weight:bold;font-size:11px;" colspan="2">${num}. ${esc(label)} — ${esc(r.url)}</td></tr>
${rows.join('\n')}
<tr><td style="padding:4px 5px;background:#f0fff0;border-top:1px dashed #2d7a2d;" colspan="2"><span style="font-size:8px;color:#2d7a2d;">Notes:</span> <span style="font-size:8px;color:#ccc;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></td></tr>
</table>`;
  }

  const leftCards = [];
  const rightCards = [];
  for (let i = 0; i < results.length; i++) {
    const card = pageCard(results[i], i + 1);
    if (i % 2 === 0) leftCards.push(card);
    else rightCards.push(card);
  }

  const leftTable = leftCards.join('\n');
  const rightTable = rightCards.join('\n');

  const tocRows = results.map((r, i) => {
    const lbl = r.path === '/' ? 'Accueil' : r.path.replace(/\//g, '').replace(/-/g, ' ');
    const s = r.error ? '❌' : '✅';
    return `<a href="#p${i + 1}" style="color:#2d7a2d;text-decoration:none;font-size:9px;">${i + 1}. ${lbl}</a> ${s}&nbsp;&nbsp;`;
  }).join('');

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Audit SEO Sinnes.fr — ${new Date().toLocaleDateString('fr-FR')}</title>
<style>
  body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 10px; background: #f4f4f4; }
  .header { background: #1a3a1a; color: #fff; padding: 8px 12px; border-radius: 4px; margin-bottom: 10px; text-align: center; }
  .header h1 { font-size: 16px; margin: 0; }
  .header p { font-size: 9px; opacity: 0.8; margin: 2px 0 0; }
  .toc { background: #fff; border: 2px solid #2d7a2d; border-radius: 4px; padding: 6px 10px; margin-bottom: 10px; columns: 4; font-size: 9px; }
  .toc a { color: #2d7a2d; text-decoration: none; }
  .toc a:hover { text-decoration: underline; }
  .cols { display: flex; gap: 10px; align-items: flex-start; }
  .col { flex: 1; min-width: 0; }
  @media print {
    @page { size: A4 landscape; margin: 8mm; }
    .page-card { page-break-inside: avoid; }
    .col { break-inside: avoid; }
  }
</style>
</head>
<body>

<div class="header">
  <h1>Audit SEO — Sinnes.fr</h1>
  <p>Généré le ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · 23 pages · Format 2 colonnes</p>
</div>

<div class="toc">${tocRows}</div>

<div class="cols">
<div class="col">

${leftTable}

</div>
<div class="col">

${rightTable}

</div>
</div>

</body>
</html>`;

  fs.writeFileSync('audit-seo-sinnes.md', html, 'utf-8');
  console.log(`\n✅ audit-seo-sinnes.md généré (2 colonnes HTML, ${results.length} pages)`);
})();
