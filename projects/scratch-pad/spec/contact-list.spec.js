describe("#contact-list", function () {
    it('should expose a Function called makeContact that returns an Object with structure: {id: \'1\', nameFirst: \'Max\', nameLast: \'Gaudin\'}', function () {
        expect(makeContact('1', 'Max', 'Gaudin')).to.eql({
            id: '1',
            nameFirst: 'Max',
            nameLast: 'Gaudin'
        });
    });
    it('should expose a Function called makeContactList that returns an Object specialized for contact management', function () {
        var contacts = makeContactList();
        expect(contacts).to.be.instanceof(Object);
    });
    it('should properly add a contact thru the addContact API', function () {
        var contacts = makeContactList();
        contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
        expect(contacts.length()).to.equal(1);
    });
    it('should properly remove a contact thru the removeContact API', function () {
        var contacts = makeContactList();
        contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
        expect(contacts.length()).to.equal(1);
        contacts.addContact(makeContact('2', 'Berta', 'Gaudin'));
        contacts.removeContact(contacts.find('Max Gaudin'));
        expect(contacts.length()).to.equal(1);
        contacts.removeContact(contacts.find('Berta Gaudin'));
        expect(contacts.length()).to.equal(0);
    });
    it('should properly find a contact by full name thru the find API', function () {
        var contacts = makeContactList();
        contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
        expect(contacts.find('Max Gaudin')).to.eql({
            id: '1',
            nameFirst: 'Max',
            nameLast: 'Gaudin'
        });
        expect(contacts.find('John Fraboni')).to.equal(undefined);
    });
    it('BONUS: should have an all API that returns new-line separated String of all full-names of contacts', function() {
        var contacts = makeContactList();
        contacts.addContact(makeContact('1', 'Max', 'Gaudin'));
        contacts.addContact(makeContact('2', 'John', 'Fraboni'));
        expect(contacts.all()).to.equal('Max Gaudin\nJohn Fraboni');
    });
});
