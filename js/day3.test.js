const day3 = require('./day3');

test('given blob of lines gives number of trees would hit', () => {

    var blobOfLines = 
    "..##.......\n"+
    "#...#...#..\n"+
    ".#....#..#.\n"+
    "..#.#...#.#\n"+
    ".#...##..#.\n"+
    "..#.##.....\n"+
    ".#.#.#....#\n"+
    ".#........#\n"+
    "#.##...#...\n"+
    "#...##....#\n"+
    ".#..#...#.#"
    
    result = day3.getNumOfTreesWouldHit(blobOfLines);
    expect(result).toBe(7)
    
});