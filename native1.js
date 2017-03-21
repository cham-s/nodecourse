var util = require('util');

var name = 'Bob';
var greeting = util.format('Hello, %s', name);
util.log(greeting);