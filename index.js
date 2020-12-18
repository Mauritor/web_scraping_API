const express = require('express');
const pageOne = require('./puppe/pageOne');
const prueba = require('./puppe/prueba');
const bodyparser = require('body-parser');
const app = express()

/*app.use(express.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());*/
const port = 3000

app.get('/', async (req, res) => {
    let dataPageOne = await pageOne();
    let users = prueba();
    res.json({ dataPageOne, users })
})


app.listen(port, () => console.log(`app listening on port ${port}`))