var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    phoneNumber:Number,
    password:String,
    addres:{
        flatNo:Number,
        street:String,
        landMark:String,
        pincode:Number
    },
    gender:String,
    hobbies:[String]

});
mongoose.model('User',userSchema,'users.accounts')