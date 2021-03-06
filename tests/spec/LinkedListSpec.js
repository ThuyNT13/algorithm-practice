describe("LinkedList object", function() {
  let ll = new LinkedList();
  let rl = new LinkedList();
  rl.append(0);
  rl.append(1);
  rl.append(2);
  rl.append(3);
  rl.append(4);

  describe("can be instantiated", function() {
    it("initialize with properties of head, which is null, and size, which is 0", function() {
      expect(ll.size).toBe(0);
      expect(ll.head).toBe(null);
    });
  });

  describe("append()", function() {
    it("a new node", function() {
      ll.append("stuff");
      expect(ll.size).toBe(1);
      expect(ll.head.val).toBe("stuff");
    });
    it("more nodes after head", function() {
      ll.append("more stuff");
      expect(ll.size).toBe(2);
      expect(ll.head.next.val).toBe("more stuff");
      ll.append("stuff not needed");
      expect(ll.size).toBe(3);
      expect(ll.head.next.next.val).toBe("stuff not needed");
    });
  });

  describe("insertAt()", function() {
    let l = new LinkedList();
    it("an element at index", function() {
      l.insertAt("stuff to be erased", 0);
      // console.log(l.head);
      expect(l.head.val).toBe("stuff to be erased");
    })
  })

  describe("find()", function() {
    it("returns error for element not found", function() {
      expect(ll.find("not here")).toEqual("Not found.");
    });
    it("finds element", function() {
      expect(ll.find("stuff")).toBe("stuff");
      expect(ll.find("more stuff")).toBe("more stuff");
      expect(ll.find("stuff not needed")).toBe("stuff not needed");
    });
  });

  describe("findBy()", function() {
    // it("returns error for element not found", function() {
    //   expect(ll.size).toBe();
    //   // to be implemented
    //   expect(ll.size).toBe();
    // });
    it("finds element by index", function() {
      expect(ll.findBy(0)).toBe("stuff");
      expect(ll.findBy(1)).toBe("more stuff");
      expect(ll.findBy(2)).toBe("stuff not needed");
    })
  })

  describe("remove()", function() {
    it("returns error for node not found", function() {
      expect(ll.size).toBe(3);
      expect(ll.remove("not here")).toEqual("Not found.");
      expect(ll.size).toBe(3);
    });
    it("node by element", function() {
      ll.remove("more stuff");
      expect(ll.size).toBe(2);
      expect(ll.head.val).toBe("stuff");
      expect(ll.head.next.val).toBe("stuff not needed");
      expect(ll.head.next.next).toBe(null);
      ll.remove("stuff");
      expect(ll.size).toBe(1);
      expect(ll.head.val).toBe("stuff not needed");
      expect(ll.head.next).toBe(null);
    });
  });

  describe("removeBy()", function() {
    // it("returns error for node not found", function() {
    //   expect(rl.size).toBe();
    //   // to be implemented
    //   expect(rl.size).toBe();
    // });
    it("by index ", function(){
      expect(rl.size).toBe(5);
      expect(rl.head.val).toBe(0);
      expect(rl.head.next.val).toBe(1);
      expect(rl.head.next.next.val).toBe(2);
      expect(rl.head.next.next.next.val).toBe(3);
      expect(rl.head.next.next.next.next.val).toBe(4);
      expect(rl.head.next.next.next.next.next).toBe(null);
      // console.log(rl);
      rl.removeBy(0);
      // console.log(rl);
      expect(rl.size).toBe(4);
      expect(rl.head.val).toBe(1);
      expect(rl.head.next.val).toBe(2);
      expect(rl.head.next.next.val).toBe(3);
      expect(rl.head.next.next.next.val).toBe(4);
      expect(rl.head.next.next.next.next).toBe(null);
      rl.removeBy(2);
      expect(rl.size).toBe(3);
      expect(rl.head.val).toBe(1)
      expect(rl.head.next.val).toBe(3);
      expect(rl.head.next.next.val).toBe(4);
      expect(rl.head.next.next.next).toBe(null);
    });
  });
});
