var upsertUserFactory = function(getEntry, createEntry, updateEntry) {

    var upsertUser = function(username, ip) {
        return getEntry(username).then(function(entry) {
            if (typeof(entry) === 'undefined') {
                return createEntry(username, ip);
            }
            return updateEntry(username, ip);
        });
    };

    return upsertUser;
};

upsertUserFactory.__type = 'factory';

module.exports = upsertUserFactory;
