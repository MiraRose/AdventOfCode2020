
function countYeses(arrayOfLines) {

}

function findHowManyYeses(listOfNums2020) {
    
}

function createArrayOfLines(listOfNums2020) {

    var arrayOfChars = listOfNums2020.split("\n\n")

    var arrayOfGroupSets = []
    
    for (var group of arrayOfChars) {
        group = group.replace(/\n/g, "")
        var groupArray = group.split("")
        var groupSet = new Set(groupArray)
        arrayOfGroupSets.push(groupSet)
    }

    return arrayOfGroupSets

}

function formSubmit() {
    var input = document.getElementById('listOfNums2020').value;

    var highestSeatNum = findHighestSeatNumber(input);
    document.getElementById('result').innerText = highestSeatNum;
}

module.exports = {  
    countYeses: countYeses,
    findHowManyYeses: findHowManyYeses,
    createArrayOfLines: createArrayOfLines
 }