const puppeteer = require('puppeteer');
const path = require('path');

const createImage = async (link) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(link);
    const location = path.join(__dirname, '../public/images/screenshot.png')
    const image = await page.screenshot({ path: location });

    await browser.close();
}

module.exports = createImage;