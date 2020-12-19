const router = require('express').Router();
const pageTwo = require('../puppe/pageTwo')

router.get('/', async (req, res) => {
    await pageTwo() 
    res.send('<h1>PageTwo</h1>')
    console.log('ok');
})

module.exports = router;