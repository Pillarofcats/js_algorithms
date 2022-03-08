const maxHeapSort = require("./heap_sort.js");

//Create an unordered numerical array
let initArray = [9,3,13,7,5,11,10];

//Take an unordered initial array and converts it to a max heap, then removes each element from the top of the max heap where each value removed will be inserted into a returned array in ascending order
let sortedArray = maxHeapSort(initArray);
console.log("Max heap sort from an unordered numerical array [9,3,13,7,5,11,10]: ", sortedArray);