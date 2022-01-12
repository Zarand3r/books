var express           = require('express'),
    RegisterController   = express.Router();

RegisterController.route('/')
  .get() //display form
  .post() //add user

  module.exports = RegisterController;
