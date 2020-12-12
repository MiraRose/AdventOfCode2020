const findNumsThatSumTo2020 = require('./day1');

test('given list finds two nums that sum to 2020', () => {
    result = findNumsThatSumTo2020([1721, 979, 366, 299, 675, 1456]);
    expect(result).toContain(299);
    expect(result).toContain(1721);
});

test('given list does not sum same num with itself', () => {
    result2 = findNumsThatSumTo2020([1010, 1721]);
    expect(result2).toBeNull();
});