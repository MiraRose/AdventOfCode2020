
const day6 = require('./day6');

// test('count yeses', () => {

//     var string = "abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb"

//     var stringArray = string.split("\n\n").forEach(line => line.split("\n")

//     console.log(stringArray)
    
//     result = day6.countYeses(stringArray)
//     expect(result).toBe(11)

    
// });

// test('count yeses', () => {

//     var string = "abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb"
    
//     result = day6.findHowManyYeses(string)
//     expect(result).toBe(11)
    
// });

test('create line array', () => {

    var string = "abc\n\na\nb\nc\n\nab\nac\n\na\na\na\na\n\nb"
    
    result = day6.createArrayOfLines(string)
    expect(result[0].has("a")).toBeTruthy()
    expect(result[2].size).toBe(3)

    
});
