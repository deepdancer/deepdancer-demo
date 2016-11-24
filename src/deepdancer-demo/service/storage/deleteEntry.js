var deleteEntryFactory = function(fsPromise, config) {

    var deleteEntry = function(username) {
        var targetPath = config.storagePath + '/' + username + '.json';
        return fsPromise.unlink(targetPath);
    };

    return deleteEntry;
};

deleteEntryFactory.__dependencies = ['fs-promise' , 'deepdancer-demo/config'];
deleteEntryFactory.__type = 'factory';

module.exports = deleteEntryFactory;