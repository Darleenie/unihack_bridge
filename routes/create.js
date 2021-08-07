// var data = require('../data.json');
/*
 * GET home page.
 */

const { create } = require("express3-handlebars");



var comments = require('../comments.json');
exports.view = function(req, res){
    // console.log(comments);
    res.render("create",comments);
};
