const letters = ["A","B","C"]

function action(element, index) {
    console.log(`Pos: ${index}, Element: ${element}`);   
}

letters.forEach((element, index) => console.log(`Pos: ${index}, Element: ${element}`)
)

letters.forEach(action); 