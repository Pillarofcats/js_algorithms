//DOESN'T ACCOUNT FOR CYCLIC GRAPHS
let directedPathExists = (currNode, graph, target) => {
  //Check if current node is the target, base case
  if(currNode === target) return true;

  //Loop through neighbours of current node recursively
  for(neighbours of graph[currNode]) {
    //Neighbour path to target exists, so source to target must exist
    if(directedPathExists(neighbours, graph, target) === true) {
      return true;
    }
  }

  //fail case
  return false;
}

module.exports = directedPathExists;