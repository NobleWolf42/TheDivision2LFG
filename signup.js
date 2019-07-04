var mysql = require('mysql');
var db = require('./mysqldbcon');

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});