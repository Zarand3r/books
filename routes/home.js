var express           = require('express'),
    HomeController   = express.Router();

//controller functions to be used below in route handling

HomeController.route('/')
  .get(function(req,res){
      res.render('pages/home', {title: "home"});
  }) // serve home page, render template with user data from login info

module.exports = HomeController;
