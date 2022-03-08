//Iterative only
const BFS = require("./breadth_first_search.js");
//Path Exists
const pathExists = require("./pathExists.js");
//BFS for Shortest Path
const shortestPathBFS = require("./shortest_path.js");
//Convert Edges to Undirected Graph
const edgesToUndirectedGraph = require("./edges_to_undirected_graph.js");

//Adjacency matrix
let graph = {
  a: ["c","b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

//Print out nodes visited using Breadth First Search Traversal
console.log("\nBreadth First Search:");
let bfsNodesVisited = BFS("a", graph);
console.log(bfsNodesVisited);

//Does a Path Exist from Source to Target Node? True
console.log("\nDoes a Path Exist from A to F?:");
let pE = pathExists("a", graph, "f");
console.log(pE);

//Does a Path Exist from Source to Target Node? False
console.log("\nDoes a Path Exist from C to F?:");
pE = pathExists("c", graph, "f");
console.log(pE);

//Shortest Path Edges
let sPEdges = [
  ["w","x"],
  ["x","y"],
  ["z","y"],
  ["z","v"],
  ["w","v"]
];

//Convert Shortest Path Edges to Undirected Graph
console.log("\nConverted Shortest Path Edges to Undirected Graph:");
let sPGraph = edgesToUndirectedGraph(sPEdges);
console.log(sPGraph);

//Find the Shortest Path from Source to Destination of a Graph
console.log("\nThe The Shortest Path from W to Z is:");
let sP = shortestPathBFS('w', sPGraph, "z");
console.log(sP);