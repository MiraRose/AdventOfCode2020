

function makeArrayOfSlopeLines() {

}

function getNumOfTreesWouldHit(blobOfLines) {

    var arrayOfLines = blobOfLines.split("\n")
    var space = 0;
    var treesHit = 0;

    for (line of arrayOfLines) {
         
        // if space (index) is a number greater than the line length
        // reset to beginning of line accounting for difference
        // to mimic the pattern repeating
        if (space > line.length) {
            space = space - line.length
        }
       
        var lineArray = line.split('');
               
        if (lineArray[space] == '#') {
            treesHit++
        }
        
        space = space + 3
        
    }

    return treesHit
}

function goDownSlope() {

}

module.exports = {  
    makeArrayOfSlopeLines: makeArrayOfSlopeLines,
    getNumOfTreesWouldHit: getNumOfTreesWouldHit,
    goDownSlope: goDownSlope
 }