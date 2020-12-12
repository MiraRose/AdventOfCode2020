function findNumsThatSumTo2020(listOfNums) {

  numsThatSumTo2020 = null;

  for (i = 0; i < listOfNums.length; i++) {
    comparingNum = listOfNums[i]
    for (i2 = 0; i2 < listOfNums.length; i2++) {
      comparedToNum = listOfNums[i2]
      if (i != i2 && comparingNum + comparedToNum == 2020) {
        numsThatSumTo2020 = [comparingNum, comparedToNum]
      }
    }

  }

    return numsThatSumTo2020;
  }

  function multiple(two2020Nums) {
    return null;
  }
  module.exports = findNumsThatSumTo2020;