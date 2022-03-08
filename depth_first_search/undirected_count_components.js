let undirectedCountComponents = (graph) => {
  //Set to hold nodes that have been visited already
  let visited = new Set();
  //Keep track of component count
  let componentCount = 0;

  //Traverse object keys of graph, so using for(x IN y)
  for(let node in graph) {
    //Traverse keys (node) in graph object which are strings
    if(DFS(node, graph, visited) == true) {
      //Finished traversing a component, increment by 1
      componentCount += 1;
    }
  }
  //Return the number of components found
  return componentCount;
}

//Traverse Nodes Recursively in graph
let DFS = (currNode, graph, nodesVisited) => {
  //Keys of graph need to be changed to number since they are stored as strings
  currNode = Number(currNode);

  //Mark visited nodes to prevent cycles
  if(nodesVisited.has(currNode)) return false;
  //Add current node visited
  nodesVisited.add(currNode);

  //Traverse current node neighbours
  for(let neighbours of graph[currNode]) {
    DFS(neighbours, graph, nodesVisited);
  }
  //Finished exploring all neighbours of a component, so move to search next component if it exists
  return true;
}

module.exports = undirectedCountComponents;