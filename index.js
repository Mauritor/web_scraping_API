const puppeteer = require('puppeteer');
const jsdom = require('jsdom');
require('dotenv').config();

(async () => {
    const url = process.env.IFIY;
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const response = await page.goto(url);
        //await page.screenshot({path: './public/screenshot.png'});
        const body = await response.text();

        const { window: { document } } = new jsdom.JSDOM(body);

        document.querySelectorAll('.browse-movie-bottom a')
            .forEach(element => {
                let name = element.textContent;
                let url = element.href;
                console.log(name, ' - ', url);
            });

        await browser.close();
    } catch (error) {
        console.error(error);
    }
})();