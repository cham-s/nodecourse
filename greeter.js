'use strict';

var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {
    constructor () {
        super();
        this.gretting = 'Hello World!';
    }
    
    greet (data) {
        console.log(this.gretting + ': ' + data);
        this.emit('greet', data);
    }
}

module.exports = Greetr;