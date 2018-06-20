describe("reverseLinkedList()", function() {
  let tn = new Node(5,null);
  let n2 = new Node(4,tn);
  let n3 = new Node(3,n2);
  let n4 = new Node(2,n3);
  let hn = new Node(1,n4);

  describe("reverses", function() {
    it("1>2>3>4>5> to 5>4>3>2>1", function() {
      expect(hn.val).toBe(1);
      expect(hn.next.val).toBe(2);
      expect(hn.next.next.val).toBe(3);
      expect(hn.next.next.next.val).toBe(4);
      expect(hn.next.next.next.next.val).toBe(5);
      expect(hn.next.next.next.next.next).toBe(null);
      const result = reverseLinkedList(hn);
      expect(result.val).toBe(5);
      expect(result.next.val).toBe(4);
      expect(result.next.next.val).toBe(3);
      expect(result.next.next.next.val).toBe(2);
      expect(result.next.next.next.next.val).toBe(1);
      expect(result.next.next.next.next.next).toBe(undefined);
    });
  });
});
