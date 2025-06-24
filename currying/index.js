// Currying is breaking a function that has multiple arguments into one or multiple levels of HOF. (High-Order Functions)

let add = (a,b) => a + b; 

// We can curry it like 

add = a => { 
    console.log("This is the function A");
    
    return b => { 
        return a + b; 
    };
}

// This looks like the main example of HOF. It is not as explicit that you'd need both A + B variables. 

const first = add(3)
console.log(first); // [Function (anonymous)]

const response = first(5)

console.log(response); // 8 

// ES6
add = a => b => a + b; 
