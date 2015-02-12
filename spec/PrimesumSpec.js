describe("Sum of Primes", function() {
    var application = new Application();

    it("should return 3682913", function() {

      expect( 3682913 ).toBe( application.primeSum(1000) );

    });
});