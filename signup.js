var mysql = require('mysql');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
var nickname;
var emailaddr;
var uppid;
var plainpass;

app.use(express.urlencoded());
app.post('/', function (request, response) {
    nickname = request.body.user.name;
    emailaddr = request.body.user.email;
    uppid = request.body.user.pi;
    plainpass = request.body.user.pass;
});

var passhash = bcrypt.hash(plainpass, saltRounds, function (err, hash) { });

var con = mysql.createConnection({
    host: "localhost",
    user: "TheDivision2LFG",
    password: "btJrOrXqS7NWCX3q"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (username, e-mail, pid, password) VALUES ?";
    var values = [nickname, emailaddr, uppid, passhash];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});