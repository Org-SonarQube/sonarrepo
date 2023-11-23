var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');


var express = require('express');
var app = express();

app.listen(8888);
// do not match
fileSystem.readFile(ddd);
