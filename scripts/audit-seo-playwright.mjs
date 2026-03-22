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

      const base = BASE_URL.replace('http://', '').replace('https://', '');
      const currentHost = new URL(BASE_URL).host;

      for (const l of links) {
        try {
          const absolute = l.href.startsWith('/')
            ? BASE_URL + l.href
            : l.href;
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

  const BASE = BASE_URL.replace('http://', '').replace('https://', '').replace('localhost:3000', '');

  let md = `# Audit SEO — Sinnes.fr\n\n> Généré le ${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })} · 23 pages\n\n---\n\n## Sommaire\n\n`;
  for (const r of results) {
    const label = r.path === '/' ? 'Accueil' : r.path.replace(/\//g, '').replace(/-/g, ' ');
    const status = r.error ? '❌' : '✅';
    md += `- [${label}](#${(r.path === '/' ? 'accueil' : r.path.replace(/\//g, '-').replace(/-$/, ''))}) ${status}\n`;
  }

  md += `\n---\n\n`;

  for (const r of results) {
    const label = r.path === '/' ? 'Accueil' : r.path.replace(/\//g, '').replace(/-/g, ' ');
    const anchor = r.path === '/' ? 'accueil' : r.path.replace(/\//g, '-').replace(/-$/, '');

    md += `## ${label}\n`;
    md += `**${r.url}**\n\n`;

    if (r.error) {
      md += `❌ **ERREUR :** ${r.error}\n\n---\n\n`;
      continue;
    }

    md += `| Balise | Valeur |\n`;
    md += `|---|---|\n`;
    md += `| **Title** | ${r.title || '_vide_'} |\n`;
    md += `| **Meta Desc** | ${r.metaDescription || '_vide_'} |\n`;
    md += `| **H1** | ${r.h1 || '_vide_'} |\n\n`;

    md += `**H2 (${r.h2.length})**\n`;
    if (r.h2.length > 0) {
      for (const h of r.h2) md += `- ${h}\n`;
    } else {
      md += `_vide_\n`;
    }
    md += `\n`;

    md += `**H3 (${r.h3.length})**\n`;
    if (r.h3.length > 0) {
      for (const h of r.h3) md += `- ${h}\n`;
    } else {
      md += `_vide_\n`;
    }
    md += `\n`;

    md += `**Liens internes entrants (${r.internalLinks.length})**\n`;
    if (r.internalLinks.length > 0) {
      md += `| Ancre | Cible |\n`;
      md += `|---|---|\n`;
      const seen = new Set();
      for (const l of r.internalLinks) {
        const key = `${l.text}→${l.href}`;
        if (!seen.has(key)) {
          seen.add(key);
          md += `| ${l.text} | ${l.href} |\n`;
        }
      }
    } else {
      md += `_vide_\n`;
    }
    md += `\n`;

    md += `**Liens externes sortants (${r.externalLinks.length})**\n`;
    if (r.externalLinks.length > 0) {
      md += `| Ancre | Cible |\n`;
      md += `|---|---|\n`;
      const seen = new Set();
      for (const l of r.externalLinks) {
        const key = `${l.text}→${l.href}`;
        if (!seen.has(key)) {
          seen.add(key);
          md += `| ${l.text} | ${l.href} |\n`;
        }
      }
    } else {
      md += `_vide_\n`;
    }
    md += `\n`;

    md += `**Commentaires**\n\n\n\n---\n\n`;
  }

  const fs = await import('fs');
  const outPath = 'audit-seo-sinnes.md';
  fs.writeFileSync(outPath, md, 'utf-8');
  console.log(`\n✅ Rapport généré : ${outPath}`);
})();
