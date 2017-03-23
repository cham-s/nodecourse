function greet(callback) {
    console.log('Hello!');
    callback();
}

greet(function() {
    console.log("function was invoked.");
});