import { chromium } from 'playwright';
import fs from 'fs';

const BASE_URL = 'http://localhost:3000';
const URLS = [
  '/',
  '/reproduction-cle-voiture/',
  '/serrurier-automobile-nice/',
  '/tarif-cle-voiture/',
  '/cle-voiture-transpondeur/',
  '/cle-voiture-perdue/',
  '/cle-voiture-nice/',
  '/programmation-cle-voiture/',
  '/urgence-cle-voiture/',
  '/depannage-cle-domicile/',
  '/prix-cle-voiture/',
  '/double-cle-voiture/',
  '/prix-cle-vs-concessionnaire/',
  '/refaire-cle-audi/',
  '/refaire-cle-fiat/',
  '/refaire-cle-hyundai/',
  '/refaire-cle-mercedes/',
  '/refaire-cle-renault/',
  '/refaire-cle-toyota/',
  '/contactez-nous/',
  '/qui-sommes-nous/'
];

const TARGET_KEYWORDS = ['clé', 'serrurier', 'voiture', 'reproduction', 'programmation', 'double', 'prix', 'perdue'];
const NAP_PHONE = '06 75 54 04 11';

async function runAudit() {
  console.log("🚀 Démarrage de l'audit SEO Playwright (Guidelines 2026)...");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const results = [];

  for (const path of URLS) {
    const url = `${BASE_URL}${path}`;
    console.log(`\n🔍 Analyse de : ${path}`);
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle' });
      const status = response ? response.status() : 500;

      if (status !== 200) {
        console.error(`❌ Erreur ${status} sur ${path}`);
        results.push({ path, status, error: 'Non 200' });
        continue;
      }

      // Extraction Meta
      const title = await page.title();
      const metaDescription = await page.getAttribute('meta[name="description"]', 'content').catch(() => null);

      // Extraction H1-H6
      const h1s = await page.$$eval('h1', els => els.map(el => el.innerText.trim()));
      const h2Count = await page.$$eval('h2', els => els.length);

      // JSON-LD
      const jsonLdScripts = await page.$$eval('script[type="application/ld+json"]', els => els.map(el => el.innerText));
      let hasWebSiteSchema = false;
      let hasLocalBusinessOrService = false;
      let hasWikidataEntity = false;

      for (const script of jsonLdScripts) {
        try {
          const data = JSON.parse(script);
          const rawString = JSON.stringify(data);
          if (rawString.includes('WebSite')) hasWebSiteSchema = true;
          if (rawString.includes('Service') || rawString.includes('LocalBusiness')) hasLocalBusinessOrService = true;
          if (rawString.includes('wikidata.org/wiki/')) hasWikidataEntity = true;
        } catch (e) {
          // parse error
        }
      }

      // NAP Consistency
      const fullText = await page.evaluate(() => document.body.innerText);
      const textForDensity = fullText.toLowerCase().replace(/[^a-z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœ]/gi, ' ').replaceAll('  ', ' ');
      const words = textForDensity.split(' ').filter(w => w.length > 2);
      const totalWords = words.length;

      const fullTextNoSpaces = fullText.replaceAll(' ', '');
      const hasPhone = fullText.includes(NAP_PHONE) || fullText.includes('0675540411') || fullTextNoSpaces.includes('0675540411');

      // Keyword Density
      const densities = {};
      for (const kw of TARGET_KEYWORDS) {
        const count = words.filter(w => w === kw).length;
        densities[kw] = totalWords > 0 ? ((count / totalWords) * 100).toFixed(2) + '%' : '0%';
      }

      results.push({
        path,
        title: title ? 'OK' : 'MISSING',
        titleLength: title ? title.length : 0,
        metaDescription: metaDescription ? 'OK' : 'MISSING',
        h1Count: h1s.length,
        hasPhone,
        totalWords,
        schema: {
          hasWebSiteSchema,
          hasLocalBusinessOrService,
          hasWikidataEntity
        },
        densities
      });

    } catch (err) {
      console.error(`❌ Exception sur ${path}: ${err.message}`);
    }
  }

  await browser.close();

  // Écrire le rapport JSON
  const reportPath = './seo_audit_report.json';
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n✅ Audit terminé. Rapport généré dans ${reportPath}`);
}

runAudit();
