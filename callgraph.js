var dependencies = require('deepdancer-demo/dependencies');
var dependenciesCallgraph = require('deepdancer-callgraph');

dependencies.eagerLoad();
console.log(dependenciesCallgraph(dependencies));

