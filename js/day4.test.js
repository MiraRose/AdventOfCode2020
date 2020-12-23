const day4 = require('./day4');

test('create object from passport string', () => {

    var string = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm"
    
    result = day4.createPassportObject(string);
    expect(result.ecl).toBe("gry")
    expect(result.pid).toBe("860033327")
    expect(result.cid).toBe("147")
    expect(result.hcl).toBe("#fffffd")
    
});

test('create array of passports from passport blob', () => {

    var string = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\n" +
    "byr:1937 iyr:2017 cid:147 hgt:183cm\n" +
    "\n" +
    "iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884\n" +
    "hcl:#cfa07d byr:1929\n" +
    "\n" +
    "hcl:#ae17e1 iyr:2013\n" +
    "eyr:2024\n" +
    "ecl:brn pid:760753108 byr:1931\n" +
    "hgt:179cm\n" +
    "\n" +
    "hcl:#cfa07d eyr:2025 pid:166559648\n" +
    "iyr:2011 ecl:brn hgt:59inm"
    
    result = day4.createArrayOfPassportObjects(string);
    expect(result.length).toBe(4)
    expect(result[0].ecl).toBe("gry")
    expect(result[1].pid).toBe("028048884")
    expect(result[2].eyr).toBe("2024")
    
});
