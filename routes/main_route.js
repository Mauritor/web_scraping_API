const router = require('express').Router();

router.get('/', (req, res) => {
    res.send(`
    <h1 
    style="color: grey; margin-top: 2Rem; display: flex; justify-content: center">
    Apis with Puppeteer
    </h1>
    <a 
    style="color: grey; margin-top: 2Rem; display: flex; justify-content: center " 
    href="http://192.168.0.16:3000/api/pageOne">
    PageOne
    </a>
    
    `)
})

module.exports = router;