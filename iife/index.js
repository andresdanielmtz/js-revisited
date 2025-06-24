// IIFE (Inmediately Invoked Function Expression) is an idiom in which a JS func runs as soon as it is defined. 

(function () {
    console.log(":D");
})();

(() => {
    console.log("D:");
})();

(async () => {
    console.log("... :D!");
})();