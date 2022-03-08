const { binarySearch } = require("./binarySearch.js");

const sorted_ascending_array = [-2,0,3,5,9,12,17];
let target;

//Test case 1 
console.log("Array: [-2,0,3,5,9,12,7], Target: 9 :");
target = 9;
//binarySearch(sorted_ascending_array, target);
//returns 9 (FOUND)
console.log(binarySearch(sorted_ascending_array, target));


//Test case 2
console.log("Array: [-2,0,3,5,9,12,7], Target: 4 :");
target = 4;
//binarySearch(sorted_ascending_array, target);
//returns -1 (NOT FOUND)
console.log(binarySearch(sorted_ascending_array, target));

//Test case 3
console.log("Array: [-2,0,3,5,9,12,7], Target: -2 :");
target = -2;
//binarySearch(sorted_ascending_array, target);
//returns -1 (NOT FOUND)
console.log(binarySearch(sorted_ascending_array, target));

//Test case 3
console.log("Array: [-2,0,3,5,9,12,17], Target: 17 :");
target = 17;
//binarySearch(sorted_ascending_array, target);
//returns -1 (NOT FOUND)
console.log(binarySearch(sorted_ascending_array, target));
