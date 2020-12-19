const express = require('express');
const bodyparser = require('body-parser');

//INIT EXPRESS
const app = express();

//app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//IMPORT ROUTES
const pageMain = require('./routes/main_route')
const pageOne = require('./routes/pageOne_route');

//ROUTES MIDDLEWARES
app.use('/', pageMain);
app.use('/api/pageOne', pageOne);



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}`))