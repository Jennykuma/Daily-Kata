/*
Number of Islands
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input:
11110
11010
11000
00000
Output: 1

Example 2:
Input:
11000
11000
00100
00011
Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    // iterate through the map
    // when it lands on a 1, we need to check all other neighbours (dfs)
    // numIslands++
    
    var numberOfIslands = 0;
    
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] == '1') {
                numberOfIslands += checkNeighbours(grid, row, col);
            }
        }
    }
    
    return numberOfIslands;
};

function checkNeighbours(grid, row, col) {
    if((row < 0) || (row >= grid.length) || (col < 0) || (col >= grid[row].length) || (grid[row][col] == '0')) {
        return 0;
    }
    
    // FLIP the 1 into 0 so we know not to go over it again
    grid[row][col] = '0';
    
    // CHECK ALL THE DIRECTIONS!!
    checkNeighbours(grid, row+1, col);
    checkNeighbours(grid, row-1, col);
    checkNeighbours(grid, row, col+1);
    checkNeighbours(grid, row, col-1);
    return 1;
}
