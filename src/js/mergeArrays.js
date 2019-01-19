function mergeArrays(array1, array2) {
  const mergedArray = [];

  let indexArray1 = 0;
  let indexArray2 = 0;
  let indexArrayMerged = 0;

  while (indexArrayMerged < (array1.length + array2.length)) {

    const currentArray1 = array1[indexArray1];
    const currentArray2 = array2[indexArray2];

    if (currentArray1 <= currentArray2 || currentArray2 === undefined) {
      mergedArray.push(currentArray1);
      indexArray1++;
    } 
    else if (currentArray2 < currentArray1 || currentArray1 === undefined) {
      mergedArray.push(currentArray2); 
      indexArray2++;
    }

    indexArrayMerged++;
  }

  return mergedArray;
}