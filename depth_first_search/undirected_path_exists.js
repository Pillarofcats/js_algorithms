//ACCOUNTS FOR CYCLES
let undirectedPathExists = (currNode, graph, target, nodesVisited) => {
  //A path exists between current node and target node
  if(currNode == target) return true

  //VISITED NODES
  //Node has been visited so we can avoid it (prevents infinite cycles in a graph)
  if(nodesVisited.has(currNode)) return false
  //Add visited node to set
  nodesVisited.add(currNode);

  //Loops through current nodes neighbours recursively 
  for(let neighbours of graph[currNode]) {
    //A path exists between the current node and target node through its neighbours
    if(undirectedPathExists(neighbours, graph, target, nodesVisited) == true) {
      return true;
    }
  }
  //A path does not exist through current node and target node
  return false;
}

module.exports = undirectedPathExists;