//Take an unordered initial array and converts it to a max heap, then removes each element from the top of the max heap where each value removed will be inserted into a returned array in ascending order (No globals and Procedural)
let maxHeapSort = (initArray) => {
  //Max heapify the initial array passed
  let maxHeapArr = maxHeapify(initArray);
  console.log("HEAPIFIED: ", maxHeapArr);
  //Get length of max heap array
  let maxHeapLen = [...maxHeapArr].length;
  //Create empty sorted list for heap sort
  let sortedArr = [];
  //Loop through heapified array removing max element and adding it the beginning of the heap sort array
  for(let i=0; i < maxHeapLen;i++) {
    //Extract the max heap element for sorted array
    let extractMaxData = maxHeapArr[0];
    //Get last element at end of heap and remove it
    let lastElement = maxHeapArr.pop();
    console.log("last element: ", lastElement);
    //Remove the max element from top of heap by replacing it with the last element in the heap
    maxHeapArr[0] = lastElement;
    console.log("new top of heap: ",  maxHeapArr[0]);
    //Add max element from heap to beginning of sorted array
    sortedArr.unshift(extractMaxData);
    console.log("Sorted Arr", sortedArr);
    //Fix heap property by bubbling down
    maxHeapArr = maxBubbleDown(maxHeapArr);
  }
  return sortedArr;
}

let maxHeapify = (initArray) => {
  let maxHeapArr = [];
  initArray.forEach((data) => {
    maxHeapArr = insertElement(data, maxHeapArr);
  })
  return maxHeapArr;
}

  //Maintain heap property after minimum extraction
  let maxBubbleDown = (maxHeapArr) => {
    //Starting at the top of heap
    let currentIndex = 0;
    let leftChildIndex;
    let rightChildIndex;
    while(true) {
      //Set children index
      leftChildIndex = (2*currentIndex)+1;
      rightChildIndex = (2*currentIndex)+2;

      //Compare left and right children elements and parent elements
      if(maxHeapArr[leftChildIndex] >= maxHeapArr[rightChildIndex] && maxHeapArr[leftChildIndex] >= maxHeapArr[currentIndex]) {
        //Swap with left child
        console.log("left is larger: ", maxHeapArr[leftChildIndex], "right: ", maxHeapArr[rightChildIndex]);
        [ maxHeapArr[leftChildIndex], maxHeapArr[currentIndex] ] = [ maxHeapArr[currentIndex], maxHeapArr[leftChildIndex] ]
        currentIndex=leftChildIndex;
      } else if(maxHeapArr[rightChildIndex] >= maxHeapArr[leftChildIndex] && maxHeapArr[rightChildIndex] >= maxHeapArr[currentIndex]) {
        //Swap with right child
        console.log("left: ", maxHeapArr[leftChildIndex], "right is larger: ", maxHeapArr[rightChildIndex]);
        [ maxHeapArr[rightChildIndex], maxHeapArr[currentIndex] ] = [ maxHeapArr[currentIndex], maxHeapArr[rightChildIndex] ]
        currentIndex=rightChildIndex;
      } else if(!maxHeapArr[rightChildIndex] && maxHeapArr[leftChildIndex] >= maxHeapArr[currentIndex]) {
        //Case for right child doesn't exist, so swap with left child if it is greater than parent
        [ maxHeapArr[leftChildIndex], maxHeapArr[currentIndex] ] = [ maxHeapArr[currentIndex], maxHeapArr[leftChildIndex] ]
        this.swapElements(leftChildIndex, currentIndex);
        //Break because we know the index has reached the end of the array
        break;
      }
      //Fail case
      else break;
    }
    return maxHeapArr;
  }

  //Insert a new elements to end of heap
  let insertElement = (data, maxHeapArr) => {
    maxHeapArr.push(data);
    //Minimum bubble up of recently created elements, the index is inserted into the minimum heap
    const currentIndex = maxHeapArr.length-1;
    //Returns the max heapified array
    return maxBubbleUp(currentIndex, maxHeapArr);
  }

  //Maintain heap property for insert element
  let maxBubbleUp = (elementsIndex, maxHeapArr) => {
    //Traverses up from current elements index to the top of the heap
    while(elementsIndex > 0) {
      //Get the index of parent elements
      let parentIndex = Math.floor((elementsIndex-1)/2);
      //Compare current elements value with parent elements value, if current value < parent value, swap
      if(maxHeapArr[elementsIndex] >= maxHeapArr[parentIndex]) {
        //Swap parent and child using destructuring
        [ maxHeapArr[elementsIndex], maxHeapArr[parentIndex] ] = [ maxHeapArr[parentIndex], maxHeapArr[elementsIndex] ];
        //Set elements index to parent index to traverse to the top of the heap
        elementsIndex = parentIndex;
      } else break;
    }
    return maxHeapArr;
  }

module.exports = maxHeapSort;