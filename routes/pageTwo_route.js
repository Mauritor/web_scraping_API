const router = require('express').Router();
const pageTwo = require('../puppe/pageTwo')

router.get('/', async (req, res) => {
    let dataPageTwo = await pageTwo()
    //res.send(`<h1>Page Two</h1> <p>${dataPageTwo}</p>`)
    res.json( dataPageTwo )
    console.log('ok');
})

module.exports = router;