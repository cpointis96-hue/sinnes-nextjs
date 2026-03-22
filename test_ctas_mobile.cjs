const { chromium, devices } = require('playwright');

(async () => {
  console.log("Starting CTA height verification on mobile...\n");
  const browser = await chromium.launch();
  
  const pagesToTest = [
    '/',
    '/reproduction-cle-voiture/',
    '/urgence-cle-voiture/',
    '/cle-voiture-nice/'
  ];
  const baseUrl = 'http://localhost:3000'; 

  // Testing on an iPhone and Android device
  const iphone = devices['iPhone 13'];
  const pixel = devices['Pixel 5'];

  for (const device of [iphone, pixel]) {
    console.log(`=========================================`);
    console.log(`Testing on ${device.userAgent.includes('iPhone') ? 'iPhone' : 'Android'} (${device.viewport.width}x${device.viewport.height})`);
    console.log(`=========================================`);
    
    const context = await browser.newContext({ ...device });
    const page = await context.newPage();

    for (const path of pagesToTest) {
      console.log(`\n--- Page: ${path} ---`);
      try {
        await page.goto(baseUrl + path, { waitUntil: 'load', timeout: 15000 });
        
        // Wait for elements to be present
        await page.waitForSelector('.btn-accent', { timeout: 5000 }).catch(() => {});
        
        const buttons = await page.$$('.btn-accent');
        
        if (buttons.length === 0) {
          console.log(`  No CTA buttons found.`);
          continue;
        }

        for (let i = 0; i < buttons.length; i++) {
          const btn = buttons[i];
          const box = await btn.boundingBox();
          const text = await btn.innerText();
          const isUrgence = await btn.evaluate(el => el.classList.contains('btn-urgence'));
          const isRed = isUrgence ? '🔴 ROUGE (Urgence)' : '🟠 ORANGE (Devis)';
          
          if (box) {
             console.log(`  ${isRed}: Hauteur = ${box.height}px | Texte = "${text.replace(/\n/g, ' ').trim().substring(0, 35)}..."`);
          } else {
             console.log(`  ${isRed}: Non visible à l'écran.`);
          }
        }
      } catch (e) {
        console.log(`  Error loading page: ${e.message}`);
      }
    }
    await context.close();
  }

  await browser.close();
  console.log("\nVerification complete.");
})();
