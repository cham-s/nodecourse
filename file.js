var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet = fs.readFile(__dirname + '/greet.txt', function(err, data) {
    console.log(data.toString());
    console.log(err);
});
