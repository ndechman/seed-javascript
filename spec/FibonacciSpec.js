describe("Fibonacci Series", function () {
    var application = new Application();

    beforeEach(function (done) {
        application.fibonaccize('data/fib.txt');
        setTimeout(function () {
            done();
        }, 50);
    });

    it("should return the correct Fibonacci numbers", function () {
        expect( '5\n144\n' ).toBe( application.fibData );
    });
});