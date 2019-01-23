function isSingleRiffle(half1, half2, shuffledDeck) {
  let h1Index = half1.length - 1;
  let h2Index = half2.length - 1;
  let sdIndex = shuffledDeck.length - 1;

  while (sdIndex >= 0) {
    const currentH1 = half1[h1Index];
    const currentH2 = half2[h2Index];
    const currentSd = shuffledDeck[sdIndex];

    if (currentH1 != undefined && currentH1 === currentSd) {
      // half1.pop();
      // shuffledDeck.pop();
      h1Index--;
    } else if (currentH2 != undefined && currentH2 === currentSd) {
      // half2.pop();
      // shuffledDeck.pop();
      h2Index--;
    } else {
      return false;
    }

    sdIndex--;
  }

  // checks for false positive when there are cards left in half stacks
  if (h1Index < 0 && h2Index < 0 && sdIndex < 0) {
    return true;
  }
  return false;
}