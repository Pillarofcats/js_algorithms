//ITERATIVE ONLY, IMPLEMENT WITH A QUEUE
let BFS = (currNode, graph) => {
  //Array to hold visited nodes in graph
  let nodeList = [];
  //Queue for our breadth first search
  const queue = [currNode];

  //Loop through the queue of nodes added
  while(queue.length > 0) {
    //Operate on current node
    //Get first in line node in queue  [front of queue (shift, add to front of queue) <--direction--- (push, add to back of queue) back of queue]
    let currNode = queue.shift()
    //Add visited nodes to node list to return and print out
    nodeList.push(currNode);
    //Loops through the current nodes neighbours using the graph passed in
    for(neighbours of graph[currNode]) {
      //Add neighbours to the queue
      queue.push(neighbours);
    }
  }
  return nodeList;
}

module.exports = BFS;