const findNumsThatSumTo2020 = require('./day1');

test('given list finds two nums that sum to 2020', () => {
  expect(findNumsThatSumTo2020([1721, 979, 366, 299, 675, 1456]))
  .toBe([1721, 299]);
});