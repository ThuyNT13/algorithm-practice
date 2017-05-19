describe('hasBalancedBrackets()', function() {
  describe('returns true if string has balanced brackets', function() {
    it('true for "{ [] () }"', function() {
      var str = "{ [] () }";
      expect(hasBalancedBrackets(str)).toBe(true);
    });
    it('true for "[ {}([ ]()) ]"', function() {
      var str = "[ {}([ ]()) ]";
      expect(hasBalancedBrackets(str)).toBe(true);
    });
    it('true for balanced pipes in "[ {}|[ ]()| ]"', function() {
      var str = "[ {}([ ]()) ]";
      expect(hasBalancedBrackets(str)).toBe(true);
    });
  });
  describe('returns false if string does not have balanced brackets', function() {
    it('false for improperly nested brackets"{ [( ]) }"', function() {
      var str = "{ [( ]) }";
      expect(hasBalancedBrackets(str)).toBe(false);
    });
    it('false for missing closer brackets in "{[}"', function() {
      var str = "{[}";
      expect(hasBalancedBrackets(str)).toBe(false);
    });
    it('false for trailing opener in "({})["', function() {
      var str = "({})[";
      expect(hasBalancedBrackets(str)).toBe(false);
    });
    it('false for leading closer in "] ({})"', function() {
      var str = "] ({})";
      expect(hasBalancedBrackets(str)).toBe(false);
    });
    it('false for unbalanced pipes in "[ {|}[ ]()| ]"', function() {
      var str = "[ {|}[ ]()| ]";
      // var str = "[ {}([ ]()) ]";
      expect(hasBalancedBrackets(str)).toBe(false);
    });
  });
})
