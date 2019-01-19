function mergeArrays(array1, array2) {
  let mergedArray = [];

  let indexArray1 = 0;
  let indexArray2 = 0;
  let indexArrayMerged = 0;

  while (indexArrayMerged < (array1.length + array2.length)) {

    const currentArray1 = array1[indexArray1];
    const currentArray2 = array2[indexArray2];

    // if array2 is empty, work on array1
    if (indexArray2 >= array2.length) {
      mergedArray.push(currentArray1);
      indexArray1++;
    } 
    // if array1 is empty, work on array2
    else if (indexArray1 >= array1.length) {
      mergedArray.push(currentArray2);
      indexArray2++;
    }
    else if (currentArray1 <= currentArray2) {
      mergedArray.push(currentArray1);
      indexArray1++;
    } 
    else if (currentArray2 < currentArray1) {
      mergedArray.push(currentArray2); 
      indexArray2++;
    }

    indexArrayMerged++;
  }

  return mergedArray;
}