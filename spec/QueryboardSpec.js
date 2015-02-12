describe("Query Board", function () {
    var application = new Application();

    beforeEach(function (done) {
        application.runMatrix('data/matrix.txt');
        setTimeout(function () {
            done();
        }, 50);
    });

    it("should return the correct output - must run on a webserver to work in Chrome", function () {
        expect( '5118\n34\n1792\n3571\n' ).toBe( application.outData );
    });
});