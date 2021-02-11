
function countYeses(listOfNums2020) {

    var arrayOfLines = createArrayOfLines(listOfNums2020)
    return findHowManyYeses(arrayOfLines)
}

function findHowManyYeses(arrayOfGroupSets) {

    var count = 0;
    for (var set of arrayOfGroupSets) {
       count = count + set.size
    }
    
    return count
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

    var numOfYeses = countYeses(input);
    document.getElementById('result').innerText = numOfYeses;
}

module.exports = {  
    countYeses: countYeses,
    findHowManyYeses: findHowManyYeses,
    createArrayOfLines: createArrayOfLines
 }