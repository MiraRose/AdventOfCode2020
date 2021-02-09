const day5 = require('./day5');

test('get row number', () => {

    var string = "BFFFBBF"
    var stringArray = string.split("")
    
    result = day5.findRow(stringArray)
    expect(result).toBe(70)

    
});

