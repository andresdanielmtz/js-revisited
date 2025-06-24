// Example utilizing setTimeout

function action() {
    console.log("He ejecutado la funcion");
}

setTimeout(action, 2000); // handler + time 
// setTimeout waits a specific amount of time and (then) executes the function.

// It can also be rewritten as 
setTimeout(() => console.log(":D"), 2000) 
// These are async callback functions, notice the "Hello World" written below will always execute first.

console.log("hello, world!");
