
//Set() - CAN ONLY STORE UNIQUE VALUES. So if Set.size is less than array.length - there are duplicates
function contains_duplicates(array) {
  return (array.length !== new Set(array).size);
}

module.exports = { contains_duplicates };