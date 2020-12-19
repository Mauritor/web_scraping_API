const router = require('express').Router();
const pageOne = require('../puppe/pageOne');
//const prueba = require('../puppe/prueba.js');


router.get('/', async (req, res) => {
    let dataPageOne = await pageOne();
    //let users = prueba();
    res.json( dataPageOne )
})

module.exports = router

