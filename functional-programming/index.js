// Pure function: For a fixed value of a and b, the return value (in this case `res` will always be the same).
const add = (a, b) => a + b; // Notice the implicit return; 

const res = add(1, 2);
console.log(res);

let id_count = 0;
const getId = () => ++id_count; 

for (let i = 0; i < 10; i++) {
    const id = getId()
    console.log(`Id: ${id}`); // It will always be changing since the id is always growing in and of itself. 
    
}

