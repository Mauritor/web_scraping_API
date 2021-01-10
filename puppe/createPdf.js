const puppeteer = require('puppeteer');

const createPdf = async (link) => {
    const url = link;
    const browser = await puppeteer.launch({ headless: true });
    const webPage = await browser.newPage();
    await webPage.goto(url, {
        waitUntil: "networkidle0"
    });
    const pdf = await webPage.pdf({
        printBackground: true,
        format: "Letter",
        margin: {
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "20px"
        }
    })
    return pdf
    await browser.close();

}

module.exports = createPdf;