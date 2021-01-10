const express = require('express');
const bodyparser = require('body-parser');

//INIT EXPRESS
const app = express();

//MIDDLEWARES
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//IMPORT ROUTES
const pageMain = require('./routes/main_route')
const pageOne = require('./routes/pageOne_route');
const pageTwo = require('./routes/pageTwo_route')
const pdf = require('./routes/pdf_route');

//ROUTES
app.use('/', pageMain);
app.use('/api/pageOne', pageOne);
app.use('/api/pageTwo', pageTwo);
app.use('/pdf', pdf)


//INIT SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}`))