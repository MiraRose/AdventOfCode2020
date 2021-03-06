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

test('given string creates correct puzzle object', () => {

    var passwordString = "1-3 a: abcde"

    result = day2.createPuzzleObject(passwordString);
    expect(result.password).toBe("abcde");
    expect(result.keyLetter).toBe("a");
    expect(result.minTimes).toBe(1);
    expect(result.maxTimes).toBe(3);
   
});

test('given string of passwords seperated by lines creates list of puzzle objects', () => {

    var passwordString = "1-3 a: abcde\n1-3 a: abcde"

    result = day2.getListOfPuzzleObjects(passwordString);
    expect(result.length).toBe(2);
    expect(result[0].password).toBe("abcde");
    expect(result[1].password).toBe("abcde");
   
});

test('given string of passwords seperated by lines returns correct num of valid passwords', () => {

    var passwordString = "1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc"

    result = day2.findHowManyPasswordsAreValid(passwordString);
    expect(result).toBe(2);
   
});

