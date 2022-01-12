var express           = require('express'),
    LoginController   = express.Router();

//controller functions to be used below in route handling

LoginController.route('/')
  .get() //display login page (like facebook, user enter login information in textboxes on main page, or go to this /login page, to find an isolated login form)
  .post() //submit login information

LoginController.route('/recover') //display
  .get() //display a simple form.
  .post() //user enters username or email address in order to get their forgotten password emailed to them

  module.exports = LoginController;
