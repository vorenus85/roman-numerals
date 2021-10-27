let toRoman = require('./index');
const cases = [
    [1, 'I'],
    //[2, 'II'],
];

describe('test toRoman function', () => {
    test.each(cases)('toRoman(%p) should return %p', (given, expected) => {
        expect(toRoman(given)).toEqual(expected);
    });
});