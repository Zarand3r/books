var _         = require('lodash'),
    fs        = require('fs'),
    excluded  = ['index.js'];

module.exports = function(app) {
  fs.readdirSync(__dirname).forEach(function(file) {
    // Only load files that aren't directories and aren't blacklisted
    if (file.substr(-3) == '.js' && !_.includes(excluded, file)) {
      // Remove extension from file name
      var basename = file.split('.')[0];
      app.use('/' + basename, require('./' + file)); //Or if i dont want to use router middleware, pass app object to controllers with: require('./controllers/' + file)(app); and the controller files export a function(app) with app.get, app.post, etc. route handling.
    }
  });
  app.use('/', require('./home.js'));
};
