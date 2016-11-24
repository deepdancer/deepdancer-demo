var getEntry = require('deepdancer-demo/service/storage/getEntry');
var createEntry = require('deepdancer-demo/service/storage/createEntry');
var updateEntry = require('deepdancer-demo/service/storage/updateEntry');

var upsertUser = function(username, ip) {
    return getEntry(username).then(function(entry) {
        if (typeof(entry) === 'undefined') {
            return createEntry(username, ip);
        }
        return updateEntry(username, ip);
    });
};

module.exports = upsertUser;
