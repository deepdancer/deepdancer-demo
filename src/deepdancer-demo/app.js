var express = require('express');

var getUser = require('deepdancer-demo/service/user/getUser');
var upsertUser = require('deepdancer-demo/service/user/upsertUser');

var app = express();

app.get('/username/:username', function(req, res) {
    var username = req.params.username;
    getUser(username).then(function(userEntry) {
        if (typeof(userEntry) === 'undefined') {
            res.status(404);
            res.send('Not found');
        }
        res.setHeader('Content-Type', 'application/json');
        return res.send(JSON.stringify(userEntry));
    }).catch(function() {
        res.status(404);
        res.send('Not found');
    });
});

app.get('/username/:username/ip/:ip', function(req, res) {
    var username = req.params.username;
    var ip = req.params.ip;
    upsertUser(username, ip).then(function() {
        var response = {
            status: 'success'
        };
        res.setHeader('Content-Type', 'application/json');
        return res.send(JSON.stringify(response));
    }).catch(function() {
        res.status(404);
        res.send('Not found');
    });
});

module.exports = app;
