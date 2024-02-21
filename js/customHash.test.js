const customHash = require('./customHash');

test('full working customHash function', () => {
    const input = 'text';

    expect(
        customHash(input).hash
    ).toEqual('d0b3cb0cc9100ef243a1023b2a129d15c28489e387d3f8b687a7299afb4b5079');

    // expect(
    //     functionInstance.asciiValues
    // ).toEqual([116,101,120,116])

    expect(
        customHash().hasArray
    ).toEqual([2,7,6,2,2,4,5,7,6,8]);
})