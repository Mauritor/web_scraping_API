const router = require('express').Router();
const createImage = require('../puppe/createImage');
const fs = require('fs');
const path = require('path');


router.post('/', async (req, res) => {
    const url = req.body.url
    await createImage(url);
    
    fs.readFile(path.join(__dirname, '../public/images/screenshot.png'), (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'image/png' })
        res.end(data)
    });
})


module.exports = router;