


function getNumOfTreesWouldHit(blobOfLines) {

    var arrayOfLines = blobOfLines.split("\n")
    var spaceOnLine = 0;
    var treesHit = 0;

    for (line of arrayOfLines) {
         
        console.log(line)
        console.log(line.length)
        // if space (index) is a number greater than the line length
        // reset to beginning of line accounting for difference
        // to mimic the pattern repeating
        if (spaceOnLine >= line.length) {

            spaceOnLine = spaceOnLine - line.length
        }
       
        console.log(spaceOnLine)
        var lineArray = line.split('');
               
        if (lineArray[spaceOnLine] == '#') {
            treesHit++
        }

        console.log(treesHit)
        
        spaceOnLine = spaceOnLine + 3
        
    }

    return treesHit
}

function formSubmit() {
    var input = document.getElementById('listOfNums2020').value;

    var numOfTreesHit =  getNumOfTreesWouldHit(input);
    document.getElementById('result').innerText = numOfTreesHit;
}


module.exports = {  
    getNumOfTreesWouldHit: getNumOfTreesWouldHit,
 }