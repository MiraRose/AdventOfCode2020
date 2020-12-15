const day2 = require('./day2');

test('given valid password object returns true', () => {

    var validObject = {
        password: "abcde",
        keyLetter: "a",
        minTimes: 1,
        maxTimes: 3
    }

    result = day2.isValidPassword(validObject);
    expect(result).toBeTruthy();
   
});

test('given invalid password object returns false', () => {

    var invalidObject = {
        password: "cdefg",
        keyLetter: "b",
        minTimes: 1,
        maxTimes: 3
    }

    result = day2.isValidPassword(invalidObject);
    expect(result).toBeFalsy();
   
});

test('given list of invalid passwords, removes false', () => {

    var listofPasswordObjects = [
        {
            password: "abcde",
            keyLetter: "a",
            minTimes: 1,
            maxTimes: 3 },
        {
            password: "cdefg",
            keyLetter: "b",
            minTimes: 1,
            maxTimes: 3
        }
    ]

    result = day2.removeInvalidPasswords(listofPasswordObjects);
    expect(result.length).toBe(1);
    expect(result[0].password).toBe("abcde")
   
});

