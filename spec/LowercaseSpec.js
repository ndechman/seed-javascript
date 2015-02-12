describe("Lowercase", function () {
    var application = new Application();

    // In real life this this is not the right way to do this.  The right way would be to install the jasmine ajax extension and use spyOn to inspect the success behavior of an ajax call.
    //      But for this purpose, I think a timeout will do.
    beforeEach(function (done) {
        application.lowercase('data/strings.txt');
        setTimeout(function () {
            done();
        }, 50);
    });

    it("should return the correct lowercase string", function () {
        expect( 'hello codeeval\r\nthis is some text' ).toBe( application.strData );
    });
});