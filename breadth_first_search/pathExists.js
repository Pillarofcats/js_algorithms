//Iterative Breadth First Search that Checks if a Path Exists from Source to Target
let pathExists = (currNode, graph, target) => {
  //Create queue with source node (currNode)
  let queue = [currNode];

  //Loop through the queue unil no nodes remain in it
  while(queue.length > 0) {
    //Get the first in line node in the queue
    let currNode = queue.shift();
    //Target was found to be the current node dequeued from queue
    if(currNode == target) return true;
    //Loop through current nodes neighbours using adjacency matrix (graph)
    for(neighbours of graph[currNode]) {
      //Add neighbours to the queue to be traversed
      queue.push(neighbours);
    }
  }
  //No path exists between source and target
  return false;
};

module.exports = pathExists;