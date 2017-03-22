'use strict';

var Greetr = require('./greeter');

var greeer1 = new Greetr();
greeer1.on('greet', function(data) {
    console.log('Someone greeted!' + data);
});

greeer1.greet("Jane");