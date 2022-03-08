const { rotate_array } = require("./rotate_array.js");

let array = [1,2,3,4,5,6,7];
let rotate_num;

// print array
console.log("Original array:");
console.log(array);

//rotate array by 3 elements (left -> right)
console.log("Rotate array by 3 elements (left -> right):");
rotate_num = 3;
rotate_array(array, rotate_num);
//print rotated array
console.log(array);

//rotate array by 9 elements (left -> right)
console.log("Rotate array by 1 elements (left -> right):");
rotate_num = 1;
rotate_array(array, rotate_num);
//print rotated array
console.log(array);

//rotate array by 9 elements (left -> right)
console.log("Rotate array by 2 elements (left -> right):");
rotate_num = 3;
rotate_array(array, rotate_num);
//print rotated array
console.log(array);
