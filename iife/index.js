// IIFE (Inmediately Invoked Function Expression) is an idiom in which a JS func runs as soon as it is defined. 
// They tend to be quite useful for maintaining local scope variables 

(function () {
    console.log(":D");
})();

// You can use arrow functions 
(() => {
    console.log("D:");
})();

// Even async works too
(async () => {
    console.log("... :D!");
})();