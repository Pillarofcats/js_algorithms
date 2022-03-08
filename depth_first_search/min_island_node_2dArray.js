//Graph must have same size row and col
//Get the minimum number of nodes an island may have iterating linearly through the graph coordinates
let minIslandNode = (graph) => {
  //Keep track of visited nodes
  let nodesVisited = new Set();
  //Number of nodes visited on an island iteration
  let minIsleCount = 0;
  let smallestIsle = Infinity;
  //Loop through every node in graph looking for land
  for(let row = 0; row < graph.length; row++) {
    for(let col = 0; col < graph[0].length; col++) {
      //DFS and return number of nodes visited on an island
      minIsleCount = DFS(row, col, graph, nodesVisited);
      //Must be a minimum of 1 node visited on an island
      if(minIsleCount > 0) {
        //Keep the smallest number of nodes on a traversed island
        if(minIsleCount < smallestIsle) {
          smallestIsle = minIsleCount;
        }
      }
    }
  }
  //Return the minimum number of nodes an island had from the graph
  return smallestIsle;
};

//Depth first search with cyclic and duplicate prevention
let DFS = (row, col, graph, nodesVisited) => {
  //Check boundaries (graph must have same size row and col)
  let rowBounds = 0 <= row && row < graph.length;
  let colBounds = 0 <= col && col < graph.length;
  if(!rowBounds || !colBounds) return 0;

  //If the position is water skip it
  if(graph[row][col] === "W") return 0;
  //Position is "L" so take position for the node and add it to nodes visited
  let position = `${row},${col}`;
  //Node have been visited so return
  if(nodesVisited.has(position)) return 0;
  //Add position to nodes visited
  nodesVisited.add(position);
  //Counter for the number of nodes an island has, start with 1 to count the current node on call stack
  let countIsleNodes = 1;
  //Traverse up, down, left, and right directions of "L" recursively, if successful increment the number of nodes visited on the island
  countIsleNodes += DFS(row-1, col, graph, nodesVisited);
  countIsleNodes += DFS(row+1, col, graph, nodesVisited);
  countIsleNodes += DFS(row, col-1, graph, nodesVisited);
  countIsleNodes += DFS(row, col+1, graph, nodesVisited);

  //Finished traversing the island component, returning number of nodes the island has
  return countIsleNodes;
};

module.exports = minIslandNode;