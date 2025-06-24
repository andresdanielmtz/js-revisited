// Higher order function receive and return a function. Often used to add functionalities (just like the decorator pattern). 


// It receives a funciton with its corresponding arguments. In this case it just logs what function is it calling. 
const withLog = (fn) => {
    return (...args) => {
        console.log(`Calling ${fn.name}`);
        return fn(...args);
    };
}

const add = (a, b) => a + b;
const addWithLogging = withLog(add);
const res = addWithLogging(3, 4);
console.log(res);
