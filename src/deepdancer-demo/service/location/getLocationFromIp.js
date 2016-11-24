var requestPromise = require('request-promise');

var getLocationFromIp = function(ip) {
    var url = 'http://freegeoip.net/json/' + ip;
    var options = {
        uri: url,
        transform: function(page) {
            return JSON.parse(page);
        }
    };
    return requestPromise(options).then(function(locationData) {
        return locationData.country_name;
    });
};


module.exports = getLocationFromIp;