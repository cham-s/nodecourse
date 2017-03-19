function Person(lastname, firstname) {
    this.lastname = lastname;
    this.firstname = firstname;
}

var foo = new Person("Foo", "Bar");

console.log("This person is " + foo.firstname + " " + foo.lastname + "."); 