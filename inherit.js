var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.gretting = 'Hello World';
}

util.inherits(Greetr, EventEmitter);
Greetr.prototype.greet = function(data) {
    console.log(this.gretting + ': ' + data);
    this.emit('greet', data);
}

var greeer1 = new Greetr();
greeer1.on('greet', function(data) {
    console.log('Someone greeted!' + data);
});

greeer1.greet("Jane");