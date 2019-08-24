require('./app/model/db.connection')
const express = require('express');
const CONFIG = require('./app/config');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(CONFIG.PORT, 
    () => console.log(`Example app listening on port ${CONFIG.PORT}!`))