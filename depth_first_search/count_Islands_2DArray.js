let countIslands2D = (array2d) => {
  //Visited Set() are positions, so use [row, col]
  let nodesVisited = new Set();
  //Number of islands counted
  let islandCount = 0;
  //Traverse through the entire 2d array to locate "L" (land)
  for(let row = 0; row < array2d.length; row++) {
    for(let col = 0; col < array2d[0].length; col++) {
      //Traverse land ("L") using Depth First Search with Nodes Visited Set() to Prevent Cycling
      //Will return true after completing and island traversal, so increment count
      if(DFS(array2d, row, col, nodesVisited)) {
        islandCount+=1;
      }
    }
  }
  //return the island count
  return islandCount;
}

//Traverse the land tiles once landed on and mark visited
let DFS = (grid, row, col, nodesVisited) => {
  //Check boundaries of position on grid (boolean)
  let rowInBounds = 0 <= row && row < grid.length;
  let colInbounds = 0 <= col && col < grid.length;
  //Check the bounds
  if(!rowInBounds || !colInbounds) return false; 

  //Only care about traversing "L", so return if current node position is "W"
  if(grid[row][col] === "W") return false;

  //NodesVisited Set() data needs to be stringified in order to use .has method, so create a string version of position
  let position = `${row},${col}`;
  //Prevent infinite cycling
  if(nodesVisited.has(position)) return false;
  //Add current node position to visited
  nodesVisited.add(position)

  //Recursive traversal cases, we have hit "L" (land)
  //Check Up, Down, Left, Right of current node (If any traversal is out of boundary it will be return false)

  //UP
  DFS(grid, row-1, col, nodesVisited);
  //DOWN
  DFS(grid, row+1, col, nodesVisited);
  //LEFT
  DFS(grid, row, col-1, nodesVisited);
  //RIGHT
  DFS(grid, row, col+1, nodesVisited);

  //Finished traversing an island
  return true;
}

module.exports = countIslands2D;