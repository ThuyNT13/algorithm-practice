class Node {
  constructor(v) {
    this.val = v;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  find(el) {
    let current = this.head;

    while (current) {
      if (current.val == el) {
        return current.val;
      }
      // increment
      current = current.next;
    }
    return "Not found."
  }

  findBy(index) {
    let current = this.head;
    let count = 0;

    // TODO Out-of-bound exception

    if (index === 0) {
      return this.head.val;
    }

    while (count < index-1) {
      // increment to index
      current = current.next;
      count++;
    }
    return current.next.val;
  }

  // O(n) as it needs to iterate all the way to the end
  append(el) {
    const node = new Node(el);
    let current = this.head;

    if (this.head == null) {
      // set new node to head
      this.head = node;
      this.size++;
      return this.head.val;
    }

    while (current.next) {
      // increment towards tail
      current = current.next;
    }
    // set reference/pointer to new tail
    current.next = node;
    this.size++;
    return current.next.val;
  }

  insertAt(el, index) {
    const node = new Node(el);
    let current = this.head;
    let prev;
    let count = 0;

    // Out-of-Bound exception

    if (index === 0) {
      node.next = current;
      this.head = node;
      this.size++;
      return this.head.val;
    }

    while (count < index-1) {
      // increment to index
      current = current.next;
      count++;
    }

    this.size++;
  }

  remove(el) {
    let current = this.head;

    if (current.val == el) {
      // replace head with next node
      this.head = current.next;
      this.size--;
      // what should be returned here?
      return el;
    }

    while (current.next) {
      if (current.next.val == el) {
        // point next to next.next, orphaning current next
        current.next = current.next.next;
        this.size--;
        // what should be returned here?
        return el;
      }
      // increment
      current = current.next;
    }
    return "Not found."
  }

  removeBy(index) {
    let current = this.head;
    let count = 0;
    let prev;

    // TODO Out-of-bound error

    if (index === 0) {
      this.head = current.next;
      this.size--;
      return this.head.val;
    }
    // iterate only up to index, watch off-by-one error
    while (count < index-1) {
      // store current to prev
      prev = current;
      // increment
      current = current.next;
      count++;
    }
    //
    prev.next = current.next;
    this.size--;
    return this.head;
  }
}
