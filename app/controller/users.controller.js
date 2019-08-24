var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.createUser = function(req,res){
    User.create(req.body,(err,user)=>{
        if(err){
            res
            .status(500)
            .json({
                message:"user creation failed",
                error:err
            });
        }else{
            res
            .status(200)
            .json(user);
        }
    })
   
    
    // User.create(user,(errr,res)=>{

    // })
}

module.exports.getUsers = function(req,res){
    User.find((err,users)=>{
        if(err){
            res
            .status(500)
            .json({
                message:"user retrival failed",
                error:err
            });
        }else{
            res
            .status(200)
            .json(users);
        }
    })
}


module.exports.getUser = function(req,res){
    let userId = req.params.id
    console.log(req.params);
    
    User.findById(userId,(err,user)=>{
        if(err){
            res
            .status(500)
            .json({
                message:"user retrival failed",
                error:err
            });
        }else{
            res
            .status(200)
            .json(user);
        }
    })
}

module.exports.deleteUser = function(req,res){
    let userId = req.params.id
    console.log(req.params);
    
    User.findByIdAndDelete(userId,(err,user)=>{
        if(err){
            res
            .status(500)
            .json({
                message:"user retrival failed",
                error:err
            });
        }else{
            res
            .status(200)
            .json(user);
        }
    })
}

module.exports.updateUser = function(req,res){
    let userId = req.params.id
    console.log(req.params);
    console.log(req.body);
    User.findByIdAndUpdate(userId,req.body,(err,user)=>{
        if(err){
            res
            .status(500)
            .json({
                message:"user retrival failed",
                error:err
            });
        }else{
            res
            .status(200)
            .json(user);
        }
    })
}