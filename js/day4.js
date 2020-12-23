
function createPassportObject(lineString) {

    var lineArray = lineString.replace(/\n/g, " ").split(' ')

    var passportObj = {}

    for (line of lineArray) {
        var lineSplit = line.split(":")
        passportObj[lineSplit[0]] = lineSplit[1];
    }

    return passportObj
}

function createArrayOfPassportObjects(passportBlob) {

    return passportBlob.split("\n\n").map(createPassportObject)
}

function isValidPassport(passportObj) {

    var isValid = passportObj.hasOwnProperty("byr") &&
    passportObj.hasOwnProperty("iyr") &&
    passportObj.hasOwnProperty("eyr") &&
    passportObj.hasOwnProperty("iyr") &&
    passportObj.hasOwnProperty("hgt") &&
    passportObj.hasOwnProperty("ecl") &&
    passportObj.hasOwnProperty("pid") &&
    (passportObj.hasOwnProperty("cid") || !passportObj.hasOwnProperty("cid"))

    return isValid
}

function findNumberOfValidPassports(passportBlob) {

    var passportArray = createArrayOfPassportObjects(passportBlob).filter(isValidPassport)

    return passportArray.length
}

module.exports = {  
    createPassportObject: createPassportObject,
    createArrayOfPassportObjects: createArrayOfPassportObjects,
    isValidPassport : isValidPassport,
    findNumberOfValidPassports : findNumberOfValidPassports
 }