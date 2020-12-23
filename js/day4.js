
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

//     byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID)

    var isValid = passportObj.hasOwnProperty("byr") &&
    passportObj.hasOwnProperty("iyr") &&
    passportObj.hasOwnProperty("eyr") &&
    passportObj.hasOwnProperty("iyr") &&
    passportObj.hasOwnProperty("hgt") &&
    passportObj.hasOwnProperty("ecl") &&
    passportObj.hasOwnProperty("pid") &&
    passportObj.hasOwnProperty("cid")

    return isValid
}

module.exports = {  
    createPassportObject: createPassportObject,
    createArrayOfPassportObjects: createArrayOfPassportObjects,
    isValidPassport : isValidPassport
 }