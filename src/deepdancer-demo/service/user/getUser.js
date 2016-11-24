var getEntry = require('deepdancer-demo/service/storage/getEntry');

var getUser = function(username) {
    return getEntry(username);
};

module.exports = getUser;