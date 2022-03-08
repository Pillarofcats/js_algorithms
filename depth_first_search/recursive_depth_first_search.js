//RECURSIVE DFS PRINT FUNCTION, RETURN TRAVERSAL NODE LIST
let printRecursiveNodeList = (currNode, graph) => {
  //List to record nodes visited in graph
  let nodeList = [];
  //Update node list with recursive depth first search results
  nodeList = recursiveDFS(currNode, graph, nodeList);
  //Return the visited node list of recursive depth first search traversal
  return nodeList;
};

//RECURSIVE DFS FUNCTION
let recursiveDFS = (currNode, graph, nodeList) => {
  //NO BASE CASE FOR THIS RECURSIVE FUNCTION

  //Update node list with current node
  nodeList.push(currNode);
  //Loop through current node neighbours recursively
  for(neighbours of graph[currNode]) {
    //Traverse neighbours recursively
    recursiveDFS(neighbours, graph, nodeList);
  }
  //Last call stack, returns nodes visited
  return nodeList;
}

module.exports = printRecursiveNodeList;