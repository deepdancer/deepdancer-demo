var deepdancer = require('deepdancer');
var dependencies = new (deepdancer.Container)();
dependencies.setModulesAsAutoregistered('deepdancer-demo');
module.exports = dependencies;