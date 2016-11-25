var getUserFactory = function(getEntry) {

    var getUser = function(username) {
        return getEntry(username);
    };

    return getUser;
};

getUserFactory.__type = 'factory';

module.exports = getUserFactory;