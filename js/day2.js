
function createPuzzleObject(passwordString) {

    var passwordObject = {
        password: null,
        keyLetter: null,
        minTimes: null,
        maxTimes: null
    }

    var passwordArray = passwordString.split(":")

    passwordObject.password = passwordArray[1].trim()
    
    var passwordArray2 = passwordArray[0].split(" ")

    passwordObject.keyLetter = passwordArray2[1]

    var passwordArray3 = passwordArray2[0].split("-")

    passwordObject.minTimes = parseInt(passwordArray3[0])
    passwordObject.maxTimes = parseInt(passwordArray3[1])

    return passwordObject
}

function getListOfPuzzleObjects(arrayOfPuzzleLines) {

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

function findHowManyPasswordsAreValid(listOfValidPasswordObjects) {

    
}

module.exports = { isValidPassword: isValidPassword, 
    removeInvalidPasswords: removeInvalidPasswords, 
    createPuzzleObject: createPuzzleObject }