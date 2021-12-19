// 快排
function quickSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[low];
  while (low < high) {
    // 右标记向左移动
    while (low < high && arr[high] > pivot) {
      --high;
    }
    // 右标记小于pivot 停止移动 右边换到左边，使左边都小于pivot
    arr[low] = arr[high];
    // 左标记向右移动
    while (low < high && arr[low] <= pivot) {
      ++low;
    }
    // 左标记大于pivot 停止移动 左边换到右边 使右边都大于pivot
    arr[high] = arr[low];
  }
  arr[low] = pivot; // pivot 到位
  return low;
}

// 冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      console.log(i, j);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
// console.log(bubbleSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

// 选择排序
function selectSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
    return arr;
  }
}

// 插入排序
function insertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i;
    let temp = arr[i];
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}
