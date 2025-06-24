// Prototypes are what JS uses to inherit features from one to another.

// Personal object, notice it can have 
const myObj = { 
    name: "Andres",
    age: 20,
    introduction() { 
        console.log(`Hello, I am ${this.name} and I'm ${this.age} years old.`);
    },
}

const example = myObj.toString();
console.log(example) // [object Object]

// Every JS Object has a built-in property called Prototype. It's an object (so it has its own prototype too!)

// myObj.toString() // looks for toString in myObject, to it looks in the prototype of myObject for toString(), finds it there and calls it. 
console.log(Object.getPrototypeOf(myObj));

const myDate = new Date(); 
let object = myDate; 

do { 
    object = Object.getPrototypeOf(object); 
    console.log(object)
} while (object); 

