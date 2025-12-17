const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch({
    args: ['--no-startup-window', '--no-first-run'],
    waitForInitialPage: false,
  });
  
  // Open a new page
  const page = await browser.newPage();
  
  // Go to the desired website
  await page.goto('https://google.com');
  
})();
