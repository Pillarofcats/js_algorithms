//Iterative Depth First Search Traversal
const iterativeDFS = require("./iterative_depth_first_search.js");
//Recursive Depth First Search Traversal
const recursiveDFS = require("./recursive_depth_first_search.js");
//Recursive Depth First Search Path Exist for Directed Graph
const recursiveDirectedPathExist = require("./directed_path_exists.js");
//Convert Edges to Graph
const edgesToUndirectedGraph = require("./edges_to_undirected_graph");
//Recursive Depth First Search Path Exist for Undirect Graph
const undirectedPathExists = require("./undirected_path_exists.js");
//Recursive Depth First Search Count Components
const undirectedCountComponents = require("./undirected_count_components");
//Recursive Depth First Search for Largest Component
const largestComponent = require("./largest_component.js");
//Count Islands in a 2D Array
const countIslands2D = require("./count_Islands_2DArray.js");
//Count Minimum Island Nodes in a 2D Array
const minIslandNodes2D = require("./min_island_node_2dArray.js");

//Adjacency matrix made as js object
let directedGraph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: []
}

//Directed Graph Given
console.log("\nDirected Graph Given:");
console.log(directedGraph);

//Print Iterative Depth First Search Traversal:
console.log("\nIterative Depth First Search Traversal:");
let dfsIterativeTraversalOrder = iterativeDFS("a", directedGraph);
console.log(dfsIterativeTraversalOrder);

//Print Recursive Depth First Search Traversal:
console.log("\nRecursive Depth First Search Traversal:");
let dfsRecursiveTraversalOrder = recursiveDFS("a", directedGraph);
console.log(dfsRecursiveTraversalOrder);

//Does A Path from Source To Destination Exists? Recursive Depth First Search
console.log("\nDoes a path from A to F Exists?:");
let recDFSPathExist = recursiveDirectedPathExist("a", directedGraph, "f");
console.log(recDFSPathExist);

//Does A Path from Source To Destination Exists? Recursive Depth First Search
console.log("\nDoes a path from C to F Exists?:");
recDFSPathExist = recursiveDirectedPathExist("c", directedGraph, "f");
console.log(recDFSPathExist);

//Edges Given (CYCLES EXIST WHEN CONVERTED TO GRAPH)
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

//Convert Edges to Undirected Graph
console.log("\nConverted Edges to Undirected Graph:");
let undirectedGraph = edgesToUndirectedGraph(edges);
console.log(undirectedGraph);

//Path Exists for Undirected Graph (CYCLES EXIST)
console.log("\nDoes a path from I to M Exist?:");
//Set is for nodes visited
let nodesVisited = new Set();
let uPE = undirectedPathExists("i", undirectedGraph, "m", nodesVisited);
console.log(uPE);

//Path Exists for Undirected Graph (CYCLES EXIST)
console.log("\nDoes a path from I to N Exist?:");
//Set is for nodes visited
nodesVisited = new Set();
uPE = undirectedPathExists("i", undirectedGraph, "n", nodesVisited);
console.log(uPE);

//Adjacency matrix made as js object
let undirGraph = {
  3: [],
  4: [6],
  6: [4,5,7,8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}

//Count Components in Undirected Graph
console.log("\nThe Number of Components in this Undirected Graph is:");
let uCC = undirectedCountComponents(undirGraph);
console.log(uCC);

//Find the Largest Component in an Adjacency Matrix
console.log("\nThe Largest Component has a Size of:");
let lC = largestComponent(undirGraph);
console.log(lC);

//Create 2D Array of Islands and Water (L = land, W = water)
let islandArray2D =[
  ['W','L','W','W','L','W'],
  ['L','L','L','W','L','W'],
  ['W','W','W','W','W','W'],
  ['W','L','W','W','W','W'],
  ['L','L','W','W','L','W'],
  ['W','W','W','W','W','W']
];

//Display 2D Array Given
console.log("\nPrint 2D Island Array:");
console.log(islandArray2D);

//Count Islands in a 2D Array
console.log("\nHow Many Islands Exist in the 2D Island Array:");
let islandCount = countIslands2D(islandArray2D);
console.log(islandCount);

//Display 2D Array Given
console.log("\nPrint 2D Island Array:");
console.log(islandArray2D);

//Count Islands in a 2D Array
console.log("\nMinimum Number of Nodes that Exist on an Island in the 2D Island Array:");
let minIsleNodeCount = minIslandNodes2D(islandArray2D);
console.log(minIsleNodeCount);