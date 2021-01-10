const { Router } = require('express');
const createPdf = require('../puppe/createPdf')
const router = Router();

router.post('/', async (req, res) => {
    const link = req.body.url;
    const pdf = await createPdf(link);
    res.contentType("application/pdf");
    res.send(pdf)
})

module.exports = router;

