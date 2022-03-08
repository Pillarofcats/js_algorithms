let edgesToUndirectedGraph = (edges) => {
  let graph = {};
  for(let edge of edges) {
    [a,b] = edge;

    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

module.exports = edgesToUndirectedGraph;