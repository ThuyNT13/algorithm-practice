function Node(v,n) {
  this.val = v;
  this.next = n;
}

function reverseLinkedList(ll) {
  let current = ll;
  let next, prev;

  while(current) {
    // current.next saved to next
    next = current.next;
    // set reference/pointer to prev, no longer pointing to current.next/next
    current.next = prev;
    // increment previous to current node
    prev = current;
    // increment current node to next node or null at end of list
    current = next;
  }
  // final prev saved to new ll
  ll = prev;
  return ll;
}
