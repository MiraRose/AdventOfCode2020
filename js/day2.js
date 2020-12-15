
function createPuzzleObject(passwordString) {

    // example of string received: 1-3 a: abcde

    var passwordObject = {
        password: null,
        keyLetter: null,
        minTimes: null,
        maxTimes: null
    }

    var passwordSplitArray = passwordString.split(":")

    passwordObject.password = passwordSplitArray[1].trim()
    
    var passwordSplitFrontHalfArray = passwordSplitArray[0].split(" ")

    passwordObject.keyLetter = passwordSplitFrontHalfArray[1]

    var passwordMinMaxNums = passwordSplitFrontHalfArray[0].split("-")

    passwordObject.minTimes = parseInt(passwordMinMaxNums[0])
    passwordObject.maxTimes = parseInt(passwordMinMaxNums[1])

    return passwordObject
}

function getListOfPuzzleObjects(stringOfPuzzleLines) {
    return stringOfPuzzleLines.split("\n").map(createPuzzleObject)
}

function removeInvalidPasswords(listOfPasswordObjects) {
    return listOfPasswordObjects.filter(isValidPassword)
}

function isValidPassword (passwordObject) {

    var isValidPassword = false
    var numOfTimesKeyLetterInString = passwordObject.password.split(passwordObject.keyLetter).length - 1;
    
    if (numOfTimesKeyLetterInString <= passwordObject.maxTimes 
        && numOfTimesKeyLetterInString >= passwordObject.minTimes) {
            isValidPassword = true
        }

    return isValidPassword
}

function findHowManyPasswordsAreValid(stringOfPuzzleLines) {

    var listOfPuzzleObjects = getListOfPuzzleObjects(stringOfPuzzleLines)
    var listOfValidPasswords = removeInvalidPasswords(listOfPuzzleObjects)
    return listOfValidPasswords.length

}

module.exports = { isValidPassword: isValidPassword, 
    removeInvalidPasswords: removeInvalidPasswords, 
    createPuzzleObject: createPuzzleObject,
    getListOfPuzzleObjects: getListOfPuzzleObjects,
    findHowManyPasswordsAreValid: findHowManyPasswordsAreValid }