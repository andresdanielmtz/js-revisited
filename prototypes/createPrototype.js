const personPrototype = { 
    greet() { 
        console.log(`Hello! My name is ${this.name}`)
    }
}

const carl = Object.create(personPrototype); 
carl.greet() // Hello, my name is undefined. 

function Person(name) {
    this.name = name
}

Object.assign(Person.prototype, personPrototype); // We assign personPrototype to the class Person, so it now has that specific function. 

const reuben = new Person("Reuben"); 
reuben.greet(); // Hello, my name is Reuben. 