// Create a class for a person that has properties for the person's name, age, and address.
var person = /** @class */ (function () {
    function person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // The class should have a method that takes a string as an argument and returns the person's name and address concatenated together.
    person.prototype.concatenated = function (seperatethis) {
        // Use type annotations for the properties and method, and make sure to catch any errors that may occur when calling the method. 
        {
            if (typeof seperatethis !== "string") {
                throw new Error("Separator must be a string");
            }
            ;
            return this.name + seperatethis + this.address;
        }
    };
    return person;
}());
var person1 = new person("Seth", 21, "Japan");
console.log(person1);
console.log(person1.concatenated(", "));
