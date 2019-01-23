function isMergedArray(half1, half2, mergedArray) {
  let h1Index = half1.length - 1;
  let h2Index = half2.length - 1;
  let maIndex = mergedArray.length - 1;

  while (maIndex >= 0) {
    const currentH1 = half1[h1Index];
    const currentH2 = half2[h2Index];
    const currentMa = mergedArray[maIndex];

    if (currentH1 != undefined && currentH1 === currentMa) {
      // half1.pop();
      // mergedArray.pop();
      h1Index--;
    } else if (currentH2 != undefined && currentH2 === currentMa) {
      // half2.pop();
      // mergedArray.pop();
      h2Index--;
    } else {
      return false;
    }

    maIndex--;
  }

  // checks for false positive when there are elements left in half stacks
  if (h1Index < 0 && h2Index < 0 && maIndex < 0) {
    return true;
  }
  return false;
}