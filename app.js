var a = 1;
var b = 2;
var c = a + b;

//console.log(c);

// function statement
function greet() {
    console.log("Hello");
}


function logGr(fn) {
    fn();
}

logGr(greet);
