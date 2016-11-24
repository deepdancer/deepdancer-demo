var getUserFactory = function(getEntry) {

    var getUser = function(username) {
        return getEntry(username);
    };

    return getUser;
};

getUserFactory.__dependencies = [
    'deepdancer-demo/service/storage/getEntry'
];
getUserFactory.__type = 'factory';

module.exports = getUserFactory;