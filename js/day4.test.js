const day4 = require('./day4');

test('create object from passport string', () => {

    var string = "ecl:gry pid:860033327 eyr:2020 hcl:#fffffd\nbyr:1937 iyr:2017 cid:147 hgt:183cm"
    
    result = day4.createPassportObject(string);
    expect(result.ecl).toBe("gry")
    expect(result.pid).toBe("860033327")
    expect(result.cid).toBe("147")
    expect(result.hcl).toBe("#fffffd")
    
});
