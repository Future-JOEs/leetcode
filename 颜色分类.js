/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 单指针遍历 遍历两次
  var l = 0;
  for (var i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      var temp = nums[i];
      nums[i] = nums[l];
      nums[l] = temp;
      l++;
    }
  }
  for (var i = l; i < nums.length; ++i) {
    if (nums[i] === 1) {
      var temp = nums[i];
      nums[i] = nums[l];
      nums[l] = temp;
      l++;
    }
  }
  return nums;
};

function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = 0,
    right = len - 1;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
}

function partition(arr, left, right) {
  var pivot = left,
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
