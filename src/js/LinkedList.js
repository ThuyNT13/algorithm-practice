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

  append(el) {
    const node = new Node(el);

    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      // iterate towards tail
      while (current.next) {
        current = current.next;
      }
      // new tail
      current.next = node;
    }
    this.size++;
    return el;
  }

  remove(el) {
    let current = this.head;

    if (current.val == el) {
      // replace head with next node
      this.head = current.next;
      this.size--;
      return el;
    }
    // iterate
    while (current.next) {
      if (current.next.val == el) {
        current.next = current.next.next;
        this.size--;
        return el;
      }
      current = current.next;
    }
  }

  removeBy(index) {

  }
}
