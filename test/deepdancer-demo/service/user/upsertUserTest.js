var dependencies = require('deepdancer-demo/dependencies');

var deleteEntry =
    dependencies.get('deepdancer-demo/service/storage/deleteEntry');
var upsertUser = dependencies.get('deepdancer-demo/service/user/upsertUser');
var getUser = dependencies.get('deepdancer-demo/service/user/getUser');

var expect = require('chai').expect;

describe('deepdancer-demo/service/user/upsertUser', function() {

    it('should properly store information', function(done) {
        deleteEntry('alanmoore').then(function() { // starts empty
            return upsertUser('alanmoore', '192.12.32.43')
        }).then(function () {
            return getUser('alanmoore');
        }).then(function(alanMooreEntry) {
            expect(alanMooreEntry).to.not.be.undefined;

            return upsertUser('alanmoore', '191.12.32.43')
        }).then(function () {
            return getUser('alanmoore');
        }).then(function (alanMooreEntry) {
            expect(alanMooreEntry).to.not.be.undefined;
            expect(alanMooreEntry.username).to.equal('alanmoore');
            expect(alanMooreEntry.ip).to.equal('191.12.32.43');
            expect(alanMooreEntry.location).to.equal('Brazil');
            done();
        });
    });

});

