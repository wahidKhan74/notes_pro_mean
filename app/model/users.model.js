var mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
    flatNo:{
        type:Number
    },
    street:String,
    landMark:String,
    pincode:Number
});
var hobbiesSchema = mongoose.Schema({
    name:String,
    spendHours:Number,
    expertise:String,
    references:{
        name:String,
        url:String
    }
});
var userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:Number,
    phoneNumber:Number,
    password:String,
    addres:addressSchema,
    gender:{
        type:String,
        'default':'male'
    },
    hobbies:[hobbiesSchema],
    createAt: {
        type:Date,
        'default':Date.now
    },
    modifiedAt: {
        type:Date,
        'default':Date.now
    },
    active:Boolean

});
mongoose.model('User',userSchema,'users.acc')