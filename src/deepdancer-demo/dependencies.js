var deepdancer = require('deepdancer-darkmagic');
var dependencies = new (deepdancer.Container)();
dependencies.registerAliasByRootPath('src/deepdancer-demo', 'deepdancer-demo');
dependencies.setModulesAsAutoregistered('deepdancer-demo');

dependencies.register('fsPromise', 'fs-promise', {type: 'alias'});
dependencies.register('requestPromise', 'request-promise', {type: 'alias'});

module.exports = dependencies;