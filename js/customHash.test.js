const customHash = require('./customHash');

test('full working customHash function, from step 1 to step 6', () => {
    const input = 'text';

    expect(
        customHash(input).hash
    ).toEqual('d0b3cb0cc9100ef243a1023b2a129d15c28489e387d3f8b687a7299afb4b5079');

})




test('working part 1 of customHash function, text to ascii value', () => {
    const input = 'text';

    expect(
        customHash().asciiValues
    ).toEqual([116,101,120,116]);

})


test('working part 2 of customHash function, split into single numbers', () => {
    const input = 'text';

    expect(
        customHash().numberArray
    ).toEqual([1,1,6,1,0,1,1,2,0,1,1,6]);

})

test('working part 3 of customHash function, split into blocks of 10 numbers', () => {
    const input = 'text';

    expect(
        customHash().blocks
    ).toEqual([[1,1,6,1,0,1,1,2,0,1],[1,6]]);

})


test('working part 5.1 of customHash function, add numbers to blocks until total of 10 when needed', () => {
    const input = 'text';

    expect(
        customHash().blocks2
    ).toEqual([[1,1,6,1,0,1,1,2,0,1],[1,6,0,1,2,3,4,5,6,7]]);

})

test('working part 5 of customHash function, add first block to second block in array', () => {
    const input = 'text';

    expect(
        customHash().hashArray
    ).toEqual([2,7,6,2,2,4,5,7,6,8]);

})

test('working part 6 of customHash function, hash 10 numbers to with SHA256', () => {
    const input = 'text';

    expect(
        customHash().hash
    ).toEqual("d0b3cb0cc9100ef243a1023b2a129d15c28489e387d3f8b687a7299afb4b5079");

})