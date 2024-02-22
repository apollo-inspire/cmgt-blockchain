function customHash(input){

    // Stap 1: Tekst omzetten naar ASCII waarde
    let asciiValues = [116,101,120,116];


    // Stap 2: Alle getallen worden gesplitst en los in een array
    let numberArray = [1,1,6,1,0,1,1,2,0,1,1,6];

    // Stap 3: Array wordt opgesplitst in blokken van 10 getallen
    let blocks = [[1,1,6,1,0,1,1,2,0,1],[1,6]];


    // Stap 5.1: Aanvullen van blokken met getallen als nodig
    let blocks2 = [[1,1,6,1,0,1,1,2,0,1],[1,6,0,1,2,3,4,5,6,7]];


    // Stap 5: Het eerste blok wordt bij het tweede blok opgeteld (herhaal)
    let hashArray = [2,7,6,2,2,4,5,7,6,8];

    // Stap 6: Vormen van de hash string
    let hash = "d0b3cb0cc9100ef243a1023b2a129d15c28489e387d3f8b687a7299afb4b5079";

    return { hash, asciiValues, numberArray, blocks, blocks2, hashArray };
}

let input = "text";
let hashedOutput = customHash(input);
console.log(hashedOutput);

module.exports = customHash