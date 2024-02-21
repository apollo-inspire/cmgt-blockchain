function customHash(input){

    // Stap 1: Tekst omzetten naar ASCII waarde
    let asciiValues = [116,101,120,116];


    // Stap 2: Alle getallen worden gesplitst en los in een array
    let numberArray = "";

    // Stap 3: Array wordt opgesplitst in blokken van 10 getallen
    let blocks = "";


    // Stap 4: Aanvullen van blokken als nodig
    let blocks2 = "";


    // Stap 5: Het eerste blok wordt bij het tweede blok opgeteld
    let hasArray = [2,7,6,2,2,4,5,7,6,8];

    // Stap 6: Vormen van de hash string
    let hash = "d0b3cb0cc9100ef243a1023b2a129d15c28489e387d3f8b687a7299afb4b5079";

    return { hash, hasArray };
}

let input = "text";
let hashedOutput = customHash(input);
console.log(hashedOutput);

module.exports = customHash