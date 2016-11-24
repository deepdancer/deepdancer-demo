var updateEntryFactory = function(deleteEntry, createEntry) {

    var updateEntry = function(username, ip) {
        return deleteEntry(username).then(function() {
            return createEntry(username, ip);
        });
    };

    return updateEntry;
};

updateEntryFactory.__dependencies = [
    'deepdancer-demo/service/storage/deleteEntry',
    'deepdancer-demo/service/storage/createEntry'
];
updateEntryFactory.__type = 'factory';

module.exports = updateEntryFactory;