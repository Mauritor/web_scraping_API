const puppeteer = require('puppeteer');
const jsdom = require('jsdom');
require('dotenv').config();

const url = process.env.BRAR
const pageTwo = async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const response = await page.goto(url);
        //await page.screenshot({ path: './public/pageTwo/imagenPageTwo.png' });

        const body = await response.text();
        const { window: { document } } = new jsdom.JSDOM(body);
        document.querySelectorAll('.lista-rounded img')
            .forEach(element => {
                let link = element.attributes.src.value;
                console.log(link);
            });

        await browser.close();
    } catch (error) {
        console.error(error);
    }

}

module.exports = pageTwo;