const mongoose = require('mongoose');
const CONFIG = require('../config');
mongoose.connect(CONFIG.DBURL,CONFIG.DBCONFIG);


mongoose.connection.on('connected',()=>{
    console.log("Connection Successfull ! to ",CONFIG.DBURL);
});

mongoose.connection.once('error',()=>{
    console.log("Connection failure !");
});

mongoose.connection.once('disconnected',()=>{
    console.log("Connection disconnected !");
})