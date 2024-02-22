const customHash = require('./customHash');

test('full working customHash function, from step 1 to step 6', () => {
    const input = 'text';
    const result = customHash(input).hash;

    expect( result ).toEqual('d0b3cb0cc9100ef243a1023b2a129d15c28489e387d3f8b687a7299afb4b5079');
    expect( result ).not.toBeNull();
    expect( result.length ).toBe(64);
    expect( typeof result ).toBe('string');
    
})



test('working part 1 of customHash function, text to ascii value', () => {
    const input = 'text';
    const result = customHash().asciiValues;

    expect( result ).toEqual([116,101,120,116]);
    expect( typeof result ).toBe('object');
    expect( result.every(entry => typeof entry === 'number') ).toBe(true);

})


test('working part 2 of customHash function, split into single numbers', () => {
    const input = 'text';
    const result = customHash().numberArray;

    expect( result ).toEqual([1,1,6,1,0,1,1,2,0,1,1,6]);
    expect( typeof result ).toBe('object');
    expect( result.every(entry => typeof entry === 'number') ).toBe(true);
    expect( result.every(entry => entry.toString().length === 1 ) ).toBe(true);

})

test('working part 3 of customHash function, split into blocks of 10 numbers', () => {
    const input = 'text';
    const result = customHash().blocks;

    expect( result ).toEqual([[1,1,6,1,0,1,1,2,0,1],[1,6]]);
    expect( typeof result ).toBe('object');
    expect( result.every(entry => typeof entry === 'object') ).toBe(true);
    expect( result.every(subArray => subArray.length <= 10 ) ).toBe(true);
    expect( result.every(subArray => subArray.every(entry => entry.toString().length === 1)) ).toBe(true);
    expect( result.every(subArray => subArray.every(entry => typeof entry === 'number')) ).toBe(true);

})


test('working part 5.1 of customHash function, add numbers to blocks until total of 10 when needed', () => {
    const input = 'text';
    const result = customHash().blocks2;

    expect( result ).toEqual([[1,1,6,1,0,1,1,2,0,1],[1,6,0,1,2,3,4,5,6,7]]);
    expect( typeof result ).toBe('object');
    expect( result.every(entry => typeof entry === 'object') ).toBe(true);
    expect( result.every(subArray => subArray.length === 10 ) ).toBe(true);
    expect( result.every(subArray => subArray.every(entry => entry.toString().length === 1)) ).toBe(true);
    expect( result.every(subArray => subArray.every(entry => typeof entry === 'number')) ).toBe(true);
})

test('working part 5 of customHash function, add first block to second block in array until 1 block left', () => {
    const input = 'text';
    const result = customHash().hashArray;

    expect( result ).toEqual([2,7,6,2,2,4,5,7,6,8]);
    expect( typeof result ).toBe('object');
    expect( result.length ).toBe(10);
    expect( result.every(entry => entry.toString().length === 1 ) ).toBe(true);
    expect( result.every(entry => typeof entry === 'number') ).toBe(true);
})

test('working part 6 of customHash function, hash 10 numbers to with SHA256', () => {
    const input = 'text';
    const result = customHash().hash;

    expect( result ).toEqual("d0b3cb0cc9100ef243a1023b2a129d15c28489e387d3f8b687a7299afb4b5079");
    expect( typeof result ).toBe('string');
    expect( result ).not.toBeNull();
    expect( result.length ).toBe(64);

})