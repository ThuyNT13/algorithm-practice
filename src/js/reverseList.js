Class Node {
  constructor(d) {
    this.data = d;
    this.next = null
  }
}

Class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }
  
  reverse() {
    let current = this.head;
    let prev;
    let next;
    
    while(current) {
      // increment next, point next to current.next node
      next = current.next;
      // set reference/pointer to prev, no longer pointing to current.next/next
      current.next = prev;
      // increment prev, point to current node
      prev = current;
      // increment current, point to next
      current = next;
    }
    // point head to prev which should be the tail, with current null
    this.head = prev;
    
    return this;
  }
}
