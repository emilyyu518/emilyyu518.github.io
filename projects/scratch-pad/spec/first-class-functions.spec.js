describe("#first-class-functions", function () {
    beforeEach(function () {
        sinon.spy(console, 'log');
    });

    afterEach(function () {
        console.log.restore();
    });
    
    describe("createGreaterThanFilter`", function () {
        it('should, given a base threshold of type Number, return a Function that tests whether a Number value is greater than the base', function() {
            var greaterThan2 = createGreaterThanFilter(2);
            expect(greaterThan2).to.be.instanceof(Function);
            expect(greaterThan2(1)).to.be.false;
        });
    });
    
    describe("createGreaterThanFilter`", function () {
        it('should, given a base threshold of type String, return a Function that tests whether a String value is greater than the base', function() {
            var greaterThanB = createGreaterThanFilter('b');
            expect(greaterThanB).to.be.instanceof(Function);
            expect(greaterThanB('a')).to.be.false;
        });
    });
    
    describe("createLessThanFilter`", function () {
        it('should, given a base threshold of type Number, return a Function that tests whether a Number value is less than the base', function() {
            var lessThan2 = createLessThanFilter(2);
            expect(lessThan2).to.be.instanceof(Function);
            expect(lessThan2(1)).to.be.true;
        });
    });
    
    describe("createLessThanFilter`", function () {
        it('should, given a base threshold of type String, return a Function that tests whether a String value is less than the base', function() {
            var lessThanB = createLessThanFilter('b');
            expect(lessThanB).to.be.instanceof(Function);
            expect(lessThanB('a')).to.be.true;
        });
    });
    
    describe("createStartsWithFilter`", function () {
        it('should, given a character, return a Function that tests whether a String value starts with the character', function() {
            var startsWithC = createStartsWithFilter('C');
            expect(startsWithC).to.be.instanceof(Function);
            expect(startsWithC('C')).to.be.true;
            expect(startsWithC('d')).to.be.false;
        });
    });
    
    describe("createEndsWithFilter`", function () {
        it('should, given a character, return a Function that tests whether a String value ends with the character', function() {
            var endsWith_k = createEndsWithFilter('k');
            expect(endsWith_k).to.be.instanceof(Function);
            expect(endsWith_k('Dork')).to.be.true;
            expect(endsWith_k('Dorky')).to.be.false;
        });
    });
    
    describe("modifyStrings`", function () {
        it('should return a modified verion of the Strings array based on the modify Function', function() {
            expect(modifyStrings(['a', 'b', 'c'], function(string) { return string.toUpperCase(); })).to.eql(['A', 'B', 'C']);
        });
    });
    
    describe("allStringsPass`", function () {
        it('should apply the test Function to all Strings, return true if all Strings passed, false otherwise', function() {
            expect(allStringsPass(['aa', 'ab', 'abc'], createStartsWithFilter('a'))).to.true;
            expect(allStringsPass(['aa', 'ba', 'abc'], createStartsWithFilter('a'))).to.false;
            expect(allStringsPass(['aa', 'ab', 'abc'], createStartsWithFilter('b'))).to.false;
        });
    });
});
