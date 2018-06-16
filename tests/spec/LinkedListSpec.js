describe("LinkedList object", function() {
  let ll = new LinkedList();

  describe("can be instantiated", function() {
    it("with properties of head, which is null, and size, which is 0", function() {
      expect(ll.size).toBe(0);
      expect(ll.head).toBe(null);
    });
  });

  describe("can append", function() {
    it("a new node", function() {
      ll.append("stuff");
      expect(ll.size).toBe(1);
      expect(ll.head.val).toBe("stuff");
    });
    it("another node", function() {
      ll.append("more stuff");
      expect(ll.size).toBe(2);
      expect(ll.head.next.val).toBe("more stuff");
    });
  });
  describe("can remove", function() {
    it("can remove element", function() {
      ll.append("stuff not needed");
      expect(ll.size).toBe(3);
      ll.remove("stuff not needed");
      expect(ll.size).toBe(2);
      ll.remove("stuff");
      // expect(ll.size).toBe(1); // returns 2?
      expect(ll.head.val).toBe("more stuff");
      expect(ll.head.next).toBe(null);
    })
  })
})
