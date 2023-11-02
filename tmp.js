const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {

    // Create a browser instance
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    //Get HTML content from HTML file
    const html = fs.readFileSync('index.voucher.html', 'utf-8');
    await page.setContent(html, {waitUntil: 'domcontentloaded'});

    // To reflect CSS used for screens instead of print
    await page.emulateMediaType('screen');

    // Downlaod the PDF
    const pdf = await page.pdf({
        path: 'result.pdf',
        printBackground: true,
        width: '595px',
        height: '842px',
    });

    // Close the browser instance
    await browser.close();
})();