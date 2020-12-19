# Api with Puppeteer

## pageOne example

```javascript
const puppeteer = require('puppeteer');
const jsdom = require('jsdom');
require('dotenv').config();

const pageOne = async () => {
    const url = process.env.IFIY;
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const response = await page.goto(url);
        //await page.screenshot({ path: './public/pageOne/screenshot.png' });
        const body = await response.text();

        const { window: { document } } = new jsdom.JSDOM(body);
        let data = [];
        let images = []
        document.querySelectorAll('.browse-movie-bottom a')
            .forEach(element => {
                let name = element.textContent;
                let url = element.href;
                let obj = { name, url}
                data.push(obj);
            });
        document.querySelectorAll('img.img-responsive')
            .forEach(elem => {
                let img = elem.attributes.src.textContent;
                images.push({ img })
            })
        return { data, images }
        await browser.close();
    } catch (error) {
        console.error(error);
    }
};

module.exports = pageOne;

```