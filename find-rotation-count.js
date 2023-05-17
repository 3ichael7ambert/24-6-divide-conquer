function findRotationCount(arr) {
    //Basically find lowest number, and it's index. begining of array
    let numIdx = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[numIdx]) {
        return numIdx = i;
      }
    }
    return numIdx;
  }

module.exports = findRotationCount





// ## **findRotationCount**
// Write a function called ***findRotationCount*** which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
// **Constraints**:
// Time Complexity: O(log N)