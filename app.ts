// Create a class for a person that has properties for the person's name, age, and address.

class person{

    private name: string
    private age: number
    private address: string

    constructor(name:string, age:number, address:string){
        this.name = name
        this.age = age
        this.address = address
    }
    // The class should have a method that takes a string as an argument and returns the person's name and address concatenated together.

    concatenated(seperatethis:string):string{

    // Use type annotations for the properties and method, and make sure to catch any errors that may occur when calling the method. 
        {if (typeof seperatethis !== "string"){
        throw new Error("Separator must be a string")};

        return this.name + seperatethis + this.address
        }



    }

}

const  person1 = new person("Seth", 21, "Japan")
console.log(person1)
console.log(person1.concatenated(", "))
















