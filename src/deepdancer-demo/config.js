var fs = require('fs');

var storagePath = fs.realpathSync(__dirname + '/../../storage/users');

module.exports = {
    storagePath: storagePath
};