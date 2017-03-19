function Person(lastname, firstname) {
    this.lastname = lastname;
    this.firstname = firstname;
}

Person.prototype.greet = function() {
    console.log("This person is " + this.firstname + " " + this.lastname + "."); 
};


var foo = new Person("Foo", "Bar");
console.log(foo.__proto__);
