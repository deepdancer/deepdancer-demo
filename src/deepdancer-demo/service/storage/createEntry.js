var createEntryFactory = function(fsPromise, getLocationFromIp, config) {

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

    return createEntry;
};

createEntryFactory.__dependencies = [
    'fs-promise',
    'deepdancer-demo/service/location/getLocationFromIp',
    'deepdancer-demo/config'
];
createEntryFactory.__type = 'factory';

module.exports = createEntryFactory;