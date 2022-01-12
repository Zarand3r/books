const express           = require('express'),
    authRouter   = express.Router();

const passport = require('passport');

/**
 * OAuth authentication routes. (Sign in)
 */
authRouter.route('/instagram')
  .get(passport.authenticate('instagram'));

authRouter.route('/instagram/callback')
  .get(passport.authenticate('instagram', {
      failureRedirect: '/login'
  }), function(req, res) {
      res.redirect(req.session.returnTo || '/');
  });

authRouter.route('/facebook')
  .get(passport.authenticate('facebook', {
      scope: ['email', 'user_location']
  }));

authRouter.route('facebook/callback')
  .get(passport.authenticate('facebook', {
      failureRedirect: '/login'
  }), function(req, res) {
      res.redirect(req.session.returnTo || '/');
  });

authRouter.route('/github')
  .get(passport.authenticate('github'));

authRouter.route('/github/callback')
  .get(passport.authenticate('github', {
      failureRedirect: '/login'
  }), function(req, res) {
      res.redirect(req.session.returnTo || '/');
  });

authRouter.route('/google')
  .get(passport.authenticate('google', {
      scope: 'profile email'
  }));

authRouter.route('/google/callback')
  .get(passport.authenticate('google', {
      failureRedirect: '/login'
  }), function(req, res) {
      res.redirect(req.session.returnTo || '/');
  });

authRouter.route('/twitter')
  .get(passport.authenticate('twitter'));

authRouter.route('/twitter/callback')
  .get(passport.authenticate('twitter', {
      failureRedirect: '/login'
  }), function(req, res) {
      res.redirect(req.session.returnTo || '/');
  });

authRouter.route('/linkedin')
  .get(passport.authenticate('linkedin', {
      state: 'SOME STATE'
  }));

authRouter.route('/linkedin/callback')
  .get(passport.authenticate('linkedin', {
      failureRedirect: '/login'
  }), function(req, res) {
      res.redirect(req.session.returnTo || '/');
  });

module.exports = authRouter;
