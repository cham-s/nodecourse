var buffer = new ArrayBuffer(8);
var view = new Int32Array(Buffer);

view[0] = 4;
view[1] = 5;
view[2] = 8;

console.log(view);