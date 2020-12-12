function findNumsThatSumTo2020(listOfNums) {

  numsThatSum2020 = null;

  for (i = 0; i < listOfNums.length; i++) {
    for (i2 = 0; i2 < listOfNums.length; i2++) {
      if (listOfNums[i] + listOfNums[i2] == 2020) {
        numsThatSum2020 = [listOfNums[i], listOfNums[i2]]
      }
    }

  }

    return numsThatSum2020;
  }
  module.exports = findNumsThatSumTo2020;