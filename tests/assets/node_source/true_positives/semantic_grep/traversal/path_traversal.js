/* 
var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');

var config = require('../config');
var Promise = require('bluebird');
Promise.promisifyAll(fileSystem);

var express = require('express');


app.get('/foo', function (req, res) {
    // ruleid:generic_path_traversal
    var date = req.query.date;
    var fileName = config.dirName + '/' + date;
    var downloadFileName = 'log_' + fileName + '.txt';

    fs.readFileAsync(fileName)
        .then(function (data) {
            res.download(fileName, downloadFileName);
        })
})

app.listen(8888);


// do not match
fileSystem.readFile(ddd);

*/
