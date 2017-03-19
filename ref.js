function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function () {
    console.log("This person is " + this.firstname + " " + this.lastname + ".");
}

var bar = new Person("Bar", "de Chocalat");
var greets = [bar]

function changeName(persons) {
    for (person in persons) {
        persons[person].firstname = "Changed";
    }
}

changeName(greets);

bar.greet();