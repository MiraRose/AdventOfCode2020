function findNumsThatSumTo2020(listOfNums, numOfNumsToSum) {

  var numsThatSumTo2020 = null;

  for (i = 0; i < listOfNums.length; i++) {
    var comparingNum = listOfNums[i]
    for (i2 = 0; i2 < listOfNums.length; i2++) {
      var comparedToNum = listOfNums[i2]

      if (numOfNumsToSum == 2) {
        var sameIndex = i == i2
        if (!sameIndex && comparingNum + comparedToNum == 2020) {
          numsThatSumTo2020 = [comparingNum, comparedToNum]
        }
      }
      
    }

  }

    return numsThatSumTo2020;
  }

  function findNumsThatSumTo2020AndMultiply(listOfNums, numOfNumsToSum) {
    var numsThatSumTo2020 = findNumsThatSumTo2020(listOfNums, numOfNumsToSum)
    console.log(numsThatSumTo2020)
    return numsThatSumTo2020[0] * numsThatSumTo2020[1]
  }

  function formSubmit() {
    var listOfNums = document.getElementById('listOfNums2020').value;
    listOfNumsArray = listOfNums.split('\n').map(function(item) {
      return parseInt(item, 10);
  });
    var multiple = findNumsThatSumTo2020AndMultiply(listOfNumsArray);
    document.getElementById('result').innerText = multiple;
}

  module.exports = { findNumsThatSumTo2020: findNumsThatSumTo2020, 
    findNumsThatSumTo2020AndMultiply: findNumsThatSumTo2020AndMultiply,
  formSubmit: formSubmit }