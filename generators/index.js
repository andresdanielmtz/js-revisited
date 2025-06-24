// Generator object is returned by a generator function and it conforms to both the iterable and iterator protocols. 


function* generator() {
    yield 1; 
    yield 2;
    yield 3;
}

const gen = generator();  // Generator object

console.log(gen.value); // Undefined

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3 

function* infinite() { 
    let index = 0;

    while (true) {
        yield index++; 
    }
}

const infiniteGenerator = infinite(); 

console.log(infiniteGenerator.next().value); // 0
console.log(infiniteGenerator.next().value); // 1 
console.log(infiniteGenerator.next().value); // 2 