var deleteEntry = require('deepdancer-demo/service/storage/deleteEntry');
var createEntry = require('deepdancer-demo/service/storage/createEntry');

var updateEntry = function(username, ip) {
    return deleteEntry(username).then(function() {
        return createEntry(username, ip);
    });
};

module.exports = updateEntry;