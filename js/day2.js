
function createPuzzleObject() {

}

function getListOfPuzzleObjects(arrayOfPuzzleLines) {

}

function findValidPasswords(listOfPasswordObjects) {

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

module.exports = { isValidPassword: isValidPassword }