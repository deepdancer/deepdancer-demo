var configFactory = function(fs) {

    var storagePath = fs.realpathSync(__dirname + '/../../storage/users');

    var config = {
        storagePath: storagePath
    };

    return config;
};

configFactory.__type = 'factory';

module.exports = configFactory;