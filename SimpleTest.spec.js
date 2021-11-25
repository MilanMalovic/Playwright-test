const { chromium, devices } = require('@playwright/test');
const iPhone = devices['iPhone 6'];

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  const context = await browser.newContext({
    ...iPhone,
    permissions: ['geolocation'],
    geolocation: { latitude: 52.52, longitude: 13.39 }
  });
  const context2 = await browser.newContext();

  const page = await context.newPage();
  const page2 = await context2.newPage();


  await page.goto("https://executeautomation.com");
  await page.screenshot({ path: `ea.png` })

  await page2.goto("https://google.com")

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click input[name="search"]
  await page.click('input[name="search"]');

  // Click input[name="search"]
  await page.click('input[name="search"]');

  // Fill input[name="search"]
  await page.fill('input[name="search"]', 'android');

  // Click text=Android (operating system)
  await page.click('text=Android (operating system)');

  await page.screenshot({ path: `esa.png` })


  // ---------------------
  await context.close();
  await context2.close();

  await browser.close();

})();
