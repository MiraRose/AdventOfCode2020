const day5 = require('./day5');

test('get row number', () => {

    var string = "BFFFBBF"
    var stringArray = string.split("")
    
    result = day5.findRow(stringArray)
    expect(result).toBe(70)

    
});

test('get column number', () => {

    var string = "RRR"
    var stringArray = string.split("")
    
    result = day5.findColumn(stringArray)
    expect(result).toBe(7)

    
});

