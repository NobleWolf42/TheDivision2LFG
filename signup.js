var mysql = require('mysql');
var db = require('./mysqldbcon');

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});