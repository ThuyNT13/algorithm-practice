/*
  given three arrays, evaluate whether or not the larger array could have been the result of the two smaller arrays merged. 
*/

function isMergedArray(half1, half2, mergedArray) {
  if ((half1.length + half2.length) != mergedArray.length ) {
    return false;
  }

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

  return true;
}