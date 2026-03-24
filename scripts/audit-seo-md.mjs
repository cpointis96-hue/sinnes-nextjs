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
      faqQuestions: [],
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

    } catch (e) {
      entry.error = e instanceof Error ? e.message : String(e);
    }

    results.push(entry);
    console.log(`Scanned: ${path}${entry.error ? ` [ERROR: ${entry.error}]` : ''}`);
  }

  await browser.close();
  const fs = await import('fs');

  const divider = '·······································································································································································';

  let md = `# Audit SEO — Sinnes.fr\n\n> Généré le ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · 23 pages\n\n---\n\n`;

  results.forEach((r, i) => {
    const num = i + 1;
    const label = r.path === '/' ? 'ACCUEIL' : r.path.replace(/\//g, '').replace(/-/g, ' ').toUpperCase();

    if (i > 0) md += `\n${divider}\n\n`;

    if (r.error) {
      md += `## ${num}. ${label}\n\n**URL:** ${r.url}\n\n❌ ERREUR: ${r.error}\n\n`;
      return;
    }

    md += `## ${num}. ${label}\n\n**URL:** ${r.url}\n\n`;

    const seenInt = new Set();
    const intLinks = r.internalLinks
      .filter((l) => { const k = `${l.text}|${l.href}`; if (seenInt.has(k)) return false; seenInt.add(k); return true; })
      .map((l) => `- **${l.text}** → ${l.href}`)
      .join('\n') || '_vide_';

    const seenExt = new Set();
    const extLinks = r.externalLinks
      .filter((l) => { const k = `${l.text}|${l.href}`; if (seenExt.has(k)) return false; seenExt.add(k); return true; })
      .map((l) => `- **${l.text}** → ${l.href}`)
      .join('\n') || '_vide_';

    md += `| Balise | Valeur |\n`;
    md += `|---|---|\n`;
    md += `| **MC Principal** | ${r.primaryKw} |\n`;
    md += `| **Title** | ${r.title || '_vide_'} |\n`;
    md += `| **Meta Desc** | ${r.metaDescription || '_vide_'} |\n`;
    md += `| **H1** | ${r.h1 || '_vide_'} |\n\n`;

    md += `**H2** (${r.h2.length})\n`;
    md += r.h2.map((h) => `- ${h}`).join('\n') || '_vide_';
    md += '\n\n';

    md += `**H3** (${r.h3.length})\n`;
    md += r.h3.map((h) => `- ${h}`).join('\n') || '_vide_';
    md += '\n\n';

    md += `**FAQ** (${r.faqQuestions.length})\n`;
    md += r.faqQuestions.map((q) => `- ${q}`).join('\n') || '_vide_';
    md += '\n\n';

    md += `**Liens internes** (${r.internalLinks.length})\n${intLinks}\n\n`;

    md += `**Liens externes** (${r.externalLinks.length})\n${extLinks}\n\n`;
  });

  fs.writeFileSync('audit-seo-sinnes.md', md, 'utf-8');
  console.log(`\n✅ audit-seo-sinnes.md généré (${results.length} pages, séparateur vert entre chaque)`);
})();
