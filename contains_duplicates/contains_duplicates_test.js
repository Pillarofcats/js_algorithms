const { contains_duplicates } = require("./contains_duplicates.js");

//print array with duplicates
const has_duplicates = [1,2,3,4,1];
console.log("Are there duplicates?");
console.log(has_duplicates);
console.log(contains_duplicates(has_duplicates));

//print array without duplicates
const no_duplicates = [1,2,3,4,5];
console.log("Are there duplicates?");
console.log(no_duplicates);
console.log(contains_duplicates(no_duplicates));