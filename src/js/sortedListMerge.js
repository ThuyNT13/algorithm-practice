function Node(v, n) {
  this.val = v;
  this.next = n;
}

// O(n + m)
function sortedMerge(l1, l2) {
  let l3 = new Node(null);
  let prev = l3;

  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      // set pointer
      l3.next = l1;
      // increment
      l1 = l1.next;
    } else {
      // set pointer
      l3.next = l2;
      // increment
      l2 = l2.next;
    }
    // increment
    l3 = l3.next;
    // sorted list so the remaining list appended to l3
    if (l1) {
      // set pointer
      l3.next = l1;
    }
    if (l2) {
      // set pointer
      l3.next = l2;
    }
  }
  return prev.next;
}
