// A closure gives a function access to its global scope. 

function init() { 
    let name = "mozilla"
    function displayName() {
        console.log(name); 
    }
    displayName(); 
    
}

init(); 