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

    if (current.val == el) {
      return this.head.val;
    }

    while (current.next) {
      if (current.next.val == el) {
        return current.next.val;
      }
      // increment
      current = current.next;
    }
  }

  findBy(index) {
    let current = this.head;
    let count = 0;

    if (index === 0) {
      return this.head.val;
    }

    while (count < index-1) {
      // increment
      current = current.next;
      count++;
    }
    return current.next.val;
  }

  append(el) {
    const node = new Node(el);

    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        // increment towards tail
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
    // iterate til value found and deleted
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
    let current = this.head;
    let count = 0;
    let prev;

    if (index === 0) {
      this.head = current.next;
      this.size--;
      return this.head.val;
    }
    // iterate only up to index, watch off-by-one error
    while (count < index-1) {
      prev = current;
      current = current.next;
      count++;
    }
    prev.next = current.next;
    this.size--;
    return this.head;
  }

  // for visual: https://www.geeksforgeeks.org/reverse-a-linked-list/
  reverse() {
    let current = this.head;
    let next;
    let prev = null;

    while(current) {
      // current.next saved to next
      next = current.next;
      // set current to point to previous, no longer pointing to current.next/next
      current.next = prev;
      // increment previous to current node
      prev = current;
      // increment current node to next node or null at end of list
      current = next;
    }
    // final prev saved to new this.head
    this.head = prev;
  }
}
