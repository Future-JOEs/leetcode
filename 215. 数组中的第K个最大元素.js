/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 快排和堆排
var findKthLargest = function(nums, k) {};

function partition2(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high;
    }
    arr[low] = arr[high];
    console.log('右换到左', low, high, arr);
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    arr[high] = arr[low];
    console.log('左换到右', low, high, arr);
  }
  arr[low] = pivot;
  console.log('基准换回去', arr);
  return low;
}

function quickSort2(arr, low, high) {
  if (low < high) {
    let pivot = partition2(arr, low, high);
    quickSort2(arr, low, pivot - 1);
    quickSort2(arr, pivot + 1, high);
  }
  return arr;
}

console.log(1213);
quickSort2([3, 2, 1, 5, 6, 4], 0, 5);
