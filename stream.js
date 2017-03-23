var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/lorem.txt', {encoding: 'utf8', highWaterMark: 16 * 1024});
var writable = fs.createWriteStream(__dirname+ '/loremcpy.txt');

readable.on('data', function(chunk) {
    console.log(chunk.length);
    writable.write(chunk);
});