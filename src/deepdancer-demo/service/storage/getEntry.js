var fsPromise = require('fs-promise');

var config = require('deepdancer-demo/config');

var getEntryFactory = function(fsPromise, config) {

    var getEntry = function (username) {
        var targetPath = config.storagePath + '/' + username + '.json';
        return fsPromise.exists(targetPath).then(function (exist) {
            if (!exist) {
                return;
            }
            return fsPromise.readFile(targetPath).then(function (content) {
                return JSON.parse(content);
            });
        });
    };

    return getEntry;
};

getEntryFactory.__dependencies = ['fs-promise', 'deepdancer-demo/config'];
getEntryFactory.__type = 'factory';

module.exports = getEntryFactory;