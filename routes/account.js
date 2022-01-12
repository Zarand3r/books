const express           = require('express'),
    accountRouter   = express.Router();

const accountController = require('../controllers/account.js');
//passportConfig is already required in app.js before this was module was loaded
const passportConfig = require('../config/passport');

accountRouter.route('/')
  .get(function(req, res) {
      res.redirect('/account/profile');
    });

accountRouter.route('/login')
  .get(accountController.getLogin)
  .post(accountController.postLogin);

accountRouter.route('/logout')
  .get(accountController.logout);

accountRouter.route('/forgot')
  .get(accountController.getForgot)
  .post(accountController.postForgot);

accountRouter.route('/reset/:token')
  .get(accountController.getReset)
  .post(accountController.postReset);

accountRouter.route('/signup')
  .get(accountController.getSignup)
  .post(accountController.postSignup);

accountRouter.route('/profile')
  .get(passportConfig.isAuthenticated, accountController.getAccount)
  .post(passportConfig.isAuthenticated, accountController.postUpdateProfile);

accountRouter.route('/password')
  .post(passportConfig.isAuthenticated, accountController.postUpdatePassword);

accountRouter.route('/delete')
  .post(passportConfig.isAuthenticated, accountController.postDeleteAccount);

accountRouter.route('/unlink/:provider')
  .post(passportConfig.isAuthenticated, accountController.getOauthUnlink);


module.exports = accountRouter;
