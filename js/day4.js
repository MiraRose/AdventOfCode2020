
function createPassportObject(lineString) {

    lineString = lineString.replace(/\n/g, " ")
    var lineArray = lineString.split(' ')

    var passportObj = {}

    for (line of lineArray) {
        var lineSplit = line.split(":")
        passportObj[lineSplit[0]] = lineSplit[1];
    }

    return passportObj
}

function createArrayOfPassportObjects(passportBlob) {

    var passportArray = passportBlob.split("\n\n")

    passportArray = passportArray.map(createPassportObject)

    return passportArray
}

function isInvalidPassport() {

}

module.exports = {  
    createPassportObject: createPassportObject,
    createArrayOfPassportObjects: createArrayOfPassportObjects
 }