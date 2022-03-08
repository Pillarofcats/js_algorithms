const edgesToGraph = require("./edges_to_graph");

//Edges Given
let edges = [
  ["i","j"],
  ["k","i"],
  ["m","k"],
  ["k","l"],
  ["o","n"],
  ["j","k"]
];

//Display Edges Given
console.log("\nEdges Given:");
console.log(edges);

//Convert Edges to Graph
console.log("\nConverted Edges to Graph:");
let graph = edgesToGraph(edges);
console.log(graph);