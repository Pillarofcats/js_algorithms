//Find the largest sized component (most nodes)
let largestComponent = (graph) => {
  //Set() to hold visited nodes
  let visitedNodes = new Set();
  //Components group ID Number
  let compID = 0;
  //Components object
  let components = {};

  //Loop through each key in the graph (each node)
  for(node in graph) {
    //Component size is return by recursive function
    compSize = DFS(node, graph, visitedNodes);
    //If a component exists it will have atleast 1 node
    if(compSize > 0) {
      //Insert component size into an object
      components[`Comp ${compID} - Size:`] = compSize;
      //Set next component ID
      compID += 1;
    }
  }

    //Find the the component with largest size (most nodes)
    let largest = 0;
    for(let component in components) {
      console.log(component, components[component]);
      if(components[component] > largest) {
        largest = components[component];
      }
    }
    //Return the size of the largest node
    return largest;
}

//Traverse the graph using a recursive depth first traversal
let DFS = (currNode, graph, visitedNodes) => {
  //Convert current node to number since keys on objects are strings
  currNode = Number(currNode);
  //Node has been visited already so just return
  if(visitedNodes.has(currNode)) return 0;
  //Add current node to visited
  visitedNodes.add(currNode);
  //Size component found, set to 1 because you have to account for the current node (doesn't count itself)
  let componentSize = 1;
  //Loop through neighbours of current node
  for(let neighbours of graph[currNode]) {
    //Increment component size based on the recursion of neighbor nodes
    componentSize += DFS(neighbours, graph, visitedNodes);
  }

  //Finished traversing a component, return component size
  return componentSize;
}

module.exports = largestComponent;