var dependencies = require('deepdancer-demo/dependencies');

var deleteEntry =
    dependencies.get('deleteEntry');
var getUser = dependencies.get('getUser');

var expect = require('chai').expect;
var sinon = require('sinon');
var Promise = require('bluebird');

describe('deepdancer-demo/service/user/upsertUser', function() {

    it('should work in integration', function(done) {
        var upsertUser =
            dependencies.get('upsertUser');
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

    var testTitle = 'should request for location information and interact ' +
        'with the file system';
    it(testTitle, function(done) {
        var requestPromiseMock = sinon.stub().returns(Promise.resolve({
            "ip": "193.168.76.1",
            "country_code": "LU",
            "country_name": "Wonderlands",
            "region_code": "",
            "region_name": "",
            "city": "",
            "zip_code": "",
            "time_zone": "Europe/Luxembourg",
            "latitude": 49.75,
            "longitude": 6.1667,
            "metro_code": 0
        }));
        var existsMock = sinon.stub().returns(Promise.resolve(false));
        var writeFileMock = sinon.stub().returns(Promise.resolve());
        var fsPromiseMock = {
            exists: existsMock,
            writeFile: writeFileMock
        };
        var injectedDependencies = {
            'requestPromise': requestPromiseMock,
            'fsPromise': fsPromiseMock
        };
        var upsertUser =
            dependencies.get('upsertUser', 'call', injectedDependencies);

        upsertUser('alanmoore', '191.12.32.43').then(function() {
            expect(requestPromiseMock.callCount).to.equal(1);
            expect(existsMock.callCount).to.equal(1);
            expect(writeFileMock.callCount).to.equal(1);
            done();
        });
    });

});

