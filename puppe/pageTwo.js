const puppeteer = require('puppeteer');
const jsdom = require('jsdom');
require('dotenv').config();

const url = process.env.PAG
const pageTwo = async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const response = await page.goto(url);
        //await page.screenshot({ path: './public/pageTwo/imagenPageTwo.png' });

        const body = await response.text();
        const { window: { document } } = new jsdom.JSDOM(body);
        let news = [];
        let urls = [];
        document.querySelectorAll('.article-title a')
            .forEach((element, index) => {
                if (index < 5) {
                    let link = element.href;
                    //console.log(link);
                    urls.push(link)
                }
            });
            document.querySelectorAll('div.element.title')
            .forEach((element, index) => {
                if (index < 5) {
                    let title = element.textContent;
                    //console.log(title);
                    news.push(title)
                }
            });
        return { urls, news }
        await browser.close();
    } catch (error) {
        console.error(error);
    }

}

module.exports = pageTwo;