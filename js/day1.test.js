const day1 = require('./day1');

test('given list finds two nums that sum to 2020', () => {
    result = day1.findNumsThatSumTo2020([1721, 979, 366, 299, 675, 1456], 2);
    expect(result).toContain(299);
    expect(result).toContain(1721);
});

test('given list finds three nums that sum to 2020', () => {
    result = day1.findNumsThatSumTo2020([1721, 979, 366, 299, 675, 1456], 3);
    expect(result).toContain(979);
    expect(result).toContain(366);
    expect(result).toContain(675);
});

test('given list does not sum same num with itself', () => {
    result2 = day1.findNumsThatSumTo2020([1010, 1721], 2);
    expect(result2).toBeNull();
});

test('given list returns multiple of num that sum to 2020', () => {
    result = day1.findNumsThatSumTo2020AndMultiply([1721, 979, 366, 299, 675, 1456], 2)
    expect(result).toBe(514579);
})

test('given list returns multiple of 3 nums that sum to 2020', () => {
    result = day1.findNumsThatSumTo2020AndMultiply([1721, 979, 366, 299, 675, 1456], 3)
    expect(result).toBe(241861950);
})