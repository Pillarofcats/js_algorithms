//Convert edges to graph
let edgesToGraph = (edges) => {
  let graph = {};
  //Loop through all the edges and convert them undirected paths
  for(let edge of edges) {
    //Destructure each edge in edges array
    [a,b] = edge;
    //If the destructured a value passed in from edge does not exist in the graph create a key for the value and create an empty array for it
    //For destructured values [a,b] = edge;
    if(!(a in graph))  graph[a] = [];
    if(!(b in graph))  graph[b] = [];
    //Since the edges are for an undirected graph, account for a->b and b->a
    graph[a].push(b);
    graph[b].push(a);
  }
  //Return the graph object
  return graph;
}

module.exports = edgesToGraph;