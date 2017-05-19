function hasBalancedBrackets(str) {
  var bracketsKeyVal = { ')':'(', '}':'{', ']':'['};

  var openers = ['(', '[', '{'];
  var closers = [')', ']', '}'];

  var pipe = '|';

  // STACK data structure for pushing and popping
  var openersStack = [];
  // console.log('---');

  for (var i=0; i<str.length; i++) {
    var char = str.charAt(i);
    var toBeMatched = openersStack[openersStack.length-1];

    if (openers.includes(char) || char === pipe) {
      openersStack.push(char);
    } else if (closers.includes(char) || char === pipe) {
      var openerBracketsVal = bracketsKeyVal[char];

      if (toBeMatched === openerBracketsVal || toBeMatched === pipe) {
        openersStack.pop();
      } else {
        console.log("not a balanced match.");
        return false;
      }
    }
  }
  // to catch edge case of remaining closers
  return openersStack.length === 0;
}
