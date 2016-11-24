var fsPromise = require('fs-promise');

var getLocationFromIp =
    require('deepdancer-demo/service/location/getLocationFromIp');
var config = require('deepdancer-demo/config');

var createEntry = function(username, ip) {
    return getLocationFromIp(ip).then(function(locationString) {
        var data = {
            username: username,
            ip: ip,
            location: locationString
        };
        var content = JSON.stringify(data);
        var targetPath = config.storagePath + '/' + username + '.json';
        return fsPromise.writeFile(targetPath, content);
    });

};

module.exports = createEntry;