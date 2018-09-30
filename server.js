var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './Profile/dist' )));

app.listen(8000, function () {
    console.log("listening on port 8000");
})