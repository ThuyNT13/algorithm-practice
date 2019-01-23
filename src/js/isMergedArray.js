function isMergedArray(half1, half2, mergedArray) {
  let h1Index = half1.length - 1;
  let h2Index = half2.length - 1;
  let sdIndex = mergedArray.length - 1;

  while (sdIndex >= 0) {
    const currentH1 = half1[h1Index];
    const currentH2 = half2[h2Index];
    const currentSd = mergedArray[sdIndex];

    if (currentH1 != undefined && currentH1 === currentSd) {
      // half1.pop();
      // mergedArray.pop();
      h1Index--;
    } else if (currentH2 != undefined && currentH2 === currentSd) {
      // half2.pop();
      // mergedArray.pop();
      h2Index--;
    } else {
      return false;
    }

    sdIndex--;
  }

  // checks for false positive when there are elements left in half stacks
  if (h1Index < 0 && h2Index < 0 && sdIndex < 0) {
    return true;
  }
  return false;
}