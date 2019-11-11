const express = require('express');
const bodyparser = require('body-parser')
const db = require(`./db`);
const router = require(`./network/routes`);

const app = express();

db('mongodb://localhost:27017/telegram');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));

router(app);

app.use('/',express.static('public'));


app.listen(3000,()=>{
    console.log(`listen...`);
});