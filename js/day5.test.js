const { findRow, findColumn } = require('./day5');
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

test('get seat number', () => {

    var rowString = "BFFFBBF"
    var rowArray = rowString.split("")
    var row = findRow(rowArray)

    var columnString = "RRR"
    var columnArray = columnString.split("")
    var column = findColumn(columnArray)
    
    result = day5.findSeatNum(row, column)
    expect(result).toBe(567)

    
});

test('find highest seat number', () => {

    var input = "BFFFBBFRRR\nFFFBBBFRRR\nBBFFBBFRLL"
    
    result = day5.findHighestSeatNumber(input)
    expect(result).toBe(820)

    
});

