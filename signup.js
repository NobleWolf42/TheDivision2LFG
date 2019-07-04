var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "TheDivision2LFG",
    password: "btJrOrXqS7NWCX3q"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});