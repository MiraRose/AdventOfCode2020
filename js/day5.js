
function findRow(firstSevenCharArray) {

    return findPosition(firstSevenCharArray, 128, "B")
}

function findPosition(charArray, lengthOfRowColumn, upperHalfIndiator) {

    var rowArray = Array.from({length: lengthOfRowColumn}, (x, i) => i);

    for (var char of charArray) {

        const half = Math.ceil(rowArray.length / 2);    

        const lowerHalf = rowArray.splice(0, half)
        const upperHalf = rowArray.splice(-half)
 
        if (char == upperHalfIndiator) {
            rowArray = upperHalf

        } else {
            rowArray = lowerHalf
        }
    }

    return rowArray[0]
}

function findColumn(lastThreeCharacters) {

    return findPosition(lastThreeCharacters, 8, "R")
    
}

function findSeatNum(row, column) {

    return (row * 8) + column
}

function findHighestSeatNumber(listOfNums2020) {

}

function formSubmit() {
    var input = document.getElementById('listOfNums2020').value;

    var highestSeatNum = findHighestSeatNumber(input);
    document.getElementById('result').innerText = highestSeatNum;
}

module.exports = {  
    findRow: findRow,
    findColumn: findColumn,
    findSeatNum : findSeatNum,
    findHighestSeatNumber : findHighestSeatNumber
 }