describe("sortedMerge()", function() {
  describe("merges 2 sorted linked list", function() {
    it("merges into one", function() {
      let n1 = new Node(12, null);
      let n2 = new Node(5, n1);
      let n3 = new Node(2, n2);
      const l1 = n3;
      let n4 = new Node(15, null);
      let n5 = new Node(8, n4);
      let n6 = new Node(4, n5);
      const l2 = n6;
      const l3 = sortedMerge(l1, l2);
      expect(l3.val).toBe(2);
      expect(l3.next.val).toBe(4);
      expect(l3.next.next.val).toBe(5);
      expect(l3.next.next.next.val).toBe(8);
      expect(l3.next.next.next.next.val).toBe(12);
      expect(l3.next.next.next.next.next.val).toBe(15);
    });
  });
});
