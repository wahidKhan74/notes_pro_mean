var express = require('express');
var router = express.Router();
var userCtrl = require('../controller/users.controller');

router
.route('/users')
.post(userCtrl.createUser)
.get(userCtrl.getUsers);

router
.route('/user/:id')
.put(userCtrl.updateUser)
.delete(userCtrl.deleteUser)
.get(userCtrl.getUser);

module.exports = router;