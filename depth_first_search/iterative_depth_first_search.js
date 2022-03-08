//ITERATIVE DFS
let iterativeDFS = (start, graph) => {
  //Visited node list
  let nodeList = [];
  //Start point for stack
  let stack = [start];

  while(stack.length > 0) {
    //Pop the top of the stack
    let currNode = stack.pop();
    //Add visited node to node list
    nodeList.push(currNode);
    //Loop through graph neighbors of current node
    for(neighbours of graph[currNode]) {
      //Add neighbours of current node to stack
      stack.push(neighbours);
    }
  }
  //Return visite node list
  return nodeList;
}

module.exports = iterativeDFS;