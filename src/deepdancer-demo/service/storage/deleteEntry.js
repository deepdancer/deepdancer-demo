var fsPromise = require('fs-promise');

var config = require('deepdancer-demo/config');

var deleteEntry = function(username) {
    var targetPath = config.storagePath + '/' + username + '.json';
    return fsPromise.unlink(targetPath);
};

module.exports = deleteEntry;