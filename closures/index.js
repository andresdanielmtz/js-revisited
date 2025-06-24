function makeFunc() {
    const name = "mozilla"
    function displayName() { 
        console.log(name);
    }
    return displayName; 
}

const myFunc = makeFunc(); // Make func got returned a () => void; Therefore it can now be used as a function. 
// You can (!!) return functions in JS. 
myFunc(); 

function makeAdder(x) { 
    return function (y) {
        return x + y;
    }
}

const add5 = makeAdder(5);  // add5: (y: any) => any; 
const add10 = makeAdder(10); 

console.log(add5(2)); // 7 
console.log(add10(5)); // 15 

