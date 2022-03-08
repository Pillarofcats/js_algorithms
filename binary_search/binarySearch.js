//ASCENDING SORTED LIST REQUIRED
//Returns index of target
function binarySearch(array, target) {
  let left = 0;
  let right = array.length-1;
  let middle;

  while(left <= right) {
    middle = Math.floor((left + right)/2);

    if(array[middle] === target) { return middle }
    else if(array[left] < target) { left = middle + 1 }
    //if (arr[right] > target) { right = middle - 1 }
    else { right = middle - 1 }
  };
  // didn't find target
  return false;
}

module.exports = { binarySearch };