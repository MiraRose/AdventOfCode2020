function findNumsThatSumTo2020(listOfNums) {

  numsThatSumTo2020 = null;

  for (i = 0; i < listOfNums.length; i++) {
    comparingNum = listOfNums[i]
    for (i2 = 0; i2 < listOfNums.length; i2++) {
      comparedToNum = listOfNums[i2]
      sameIndex = i == i2
      if (!sameIndex && comparingNum + comparedToNum == 2020) {
        numsThatSumTo2020 = [comparingNum, comparedToNum]
      }
    }

  }

    return numsThatSumTo2020;
  }

  function findNumsThatSumTo2020AndMultiply(listOfNums) {
    numsThatSumTo2020 = findNumsThatSumTo2020(listOfNums)
    return numsThatSumTo2020[0] * numsThatSumTo2020[1]
  }


  module.exports = { findNumsThatSumTo2020: findNumsThatSumTo2020, 
    findNumsThatSumTo2020AndMultiply: findNumsThatSumTo2020AndMultiply }