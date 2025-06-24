let arr = [1, 2, 3]
const filteredArr = arr.filter(x => x % 2 === 0); // Give me the pair values.
console.log(filteredArr);


// (This is a pure function too) 
const filteredEven = x => x % 2 === 0; // (x: any) => boolean; 
console.log(arr.filter(filteredEven))

const double = x => 2 * x;
console.log(arr.map(double)); // For each value go through that function. 

const sum = (accumulatedSum, arrayItem) => accumulatedSum + arrayItem;
console.log(arr.reduce(sum));

arr = arr.concat([4, 5])
console.log(arr);

arr = [...arr, 6, 7]; // Use existing operator, plus whats existing. 
console.log(arr);