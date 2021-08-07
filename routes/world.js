// open world mode page
var data = require('../data_email.json');

exports.view = function(req, res){
    res.render('world', data);
  };

