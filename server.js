require('./app/model/db.connection')
const express = require('express');
const bodyParser = require('body-parser');
const CONFIG = require('./app/config');
const app = express();
var userRoutes = require('./app/routes/users.route');

app.get('/', (req, res) => res.send('Hello World!'))

// body parsers
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',userRoutes);

app.listen(CONFIG.PORT, 
    () => console.log(`Example app listening on port ${CONFIG.PORT}!`))