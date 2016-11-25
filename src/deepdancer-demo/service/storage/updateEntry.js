var updateEntryFactory = function(deleteEntry, createEntry) {

    var updateEntry = function(username, ip) {
        return deleteEntry(username).then(function() {
            return createEntry(username, ip);
        });
    };

    return updateEntry;
};

updateEntryFactory.__type = 'factory';

module.exports = updateEntryFactory;