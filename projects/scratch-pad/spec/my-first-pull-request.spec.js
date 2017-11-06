describe("#my-first-pull-request", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });
    
    describe("print", function () {
        it('should log the given value', function() {
            print('Operation Spark');
            expect(console.log.firstCall.calledWith('Operation Spark')).to.be.true;
        });
    });
});
