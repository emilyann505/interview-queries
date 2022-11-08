/**
 * @param {number[]} nums
 * @return {number}
 */

// calc the pivot index
// calc the sum of the left side
// calc the sum of the right side
// compare the left and right side
// if they are equal return the index
// if not, return the leftmost index
// if no pivot index, return -1

const pivotIndex = nums => {
  let pivotIndex = -1;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) {
      pivotIndex = i;
      break;
    }
    leftSum += nums[i];
  }

  return pivotIndex;
}

 