function sudoku(puzzle){
    let nonPossibilities = {},impossibleNumbers, emptyspaces = 81;
    while(emptyspaces>0){
        emptyspaces = 0;
    for (let vert = 0; vert < puzzle.length; vert++){
        for(let hori = 0; hori < puzzle.length; hori++){
            // console.log(puzzle[vert][hori]);
            if(puzzle[vert][hori]===0){

                nonPossibilities = {};
               for(let i = 0; i< 9; i++){
                   if(puzzle[vert][i]>0){
                       nonPossibilities[puzzle[vert][i]] = true
                   }
                //    if(puzzle[hori][i]>0){
                   if(puzzle[i][hori]>0){
                    //    nonPossibilities[puzzle[vert][hori]] = true
                       nonPossibilities[puzzle[i][hori]] = true
                   }

               } 
               for(let vertBox = Math.floor(vert/3)*3;vertBox < Math.floor(vert/3)*3 +3; vertBox++){
                    
                for(let horiBox = Math.floor(hori/3)*3;horiBox < Math.floor(hori/3)*3 +3; horiBox++){
                    if(puzzle[vertBox][horiBox]){
                        nonPossibilities[puzzle[vertBox][horiBox]] = true
                      }
              }
            }
            impossibleNumbers = Object.keys(nonPossibilities);
            if(impossibleNumbers.length === 8){
                for(let i = 1; i< 10;i++){
                    // console.log(impossibleNumbers.indexOf(i.toString())<0);
                    // if(impossibleNumbers.indexOf((""+ i)<0)){
                    if(impossibleNumbers.indexOf(i.toString()) <0){
                       console.log(vert,hori);
                        puzzle[vert][hori]= i;
                    }
                }
            } else{
                 emptyspaces++;
            }
            // console.log(nonPossibilities);
            }
        }
    }
}
    return puzzle;
}

var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5], 
    [0,0,0,0,8,0,0,7,9]
];
var puzzle1 = [
    [8,1,2,7,0,0,0,0,9],
    [0,0,3,6,0,0,0,0,0],
    [6,7,5,0,9,0,2,0,0],
    [0,5,0,0,0,7,0,0,0],
    [0,6,0,0,4,5,7,0,0],
    [0,0,0,1,0,0,5,3,0],
    [0,0,1,0,0,0,3,6,8],
    [0,0,8,5,0,0,0,1,0], 
    [0,9,0,0,0,8,4,0,0]
];
console.log(sudoku(puzzle1));