
//Get the Shortest Path from Node to Target Node using BFS with cycle prevention (visited node Set())
let shortestPathBFS = (startNode, graph, targetNode) => {

  //Keep track of visited nodes by using a Set(), constant look up time, also we start with a node so it has been visited
  //Intialize Set() with starting node
  let visitedNodes = new Set(startNode);

  //Queue to path through nodes of component, start with [current node, distance]
  let queue = [[startNode, 0]];

  //Traverse neighbour nodes of current node by queue
  while(queue.length > 0) {

    //Get first node in line of queue using destructuring since the element of the queue is also an array [startNode, distance]
    let [node, distance] = queue.shift();
    //Target is found return the distance of node
    if(targetNode === node) return distance;

    //Traverse through neighbours of current node
    for(let neighbour of graph[node]) {

      //Prevent infinite cycles
      //Check if we have NOT visited node already, so it doesn't exist in the visited nodes
      if(!visitedNodes.has(neighbour)) {
        //Node has not been visited, so add it to visited node set
        visitedNodes.add(neighbour);
        //Add neighbor to queue, but ADD distance + 1 since it is a neighbour to the array element [next node, distance + 1]
        queue.push([neighbour, distance + 1]);
      }
    }
  }

  //Finished traversal of component and its nodes, no target was found
  return -1;
}

module.exports = shortestPathBFS;