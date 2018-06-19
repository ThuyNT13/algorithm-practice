function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length-1;

  while (start <= end) {
    let mid = Math.floor((end+start) / 2);

    // check if midpoint has value
    if (arr[mid] == el) {
      return mid;
    }

    if (arr[mid] < el) {
      start = mid+1;
    } else {
      end = mid-1;
    }
  }
  return -1;
  //
}
