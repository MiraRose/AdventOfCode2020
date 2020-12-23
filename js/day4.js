
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

function isInvalidPassport() {

}

module.exports = {  
    createPassportObject: createPassportObject,
    createArrayOfPassportObjects: createArrayOfPassportObjects
 }