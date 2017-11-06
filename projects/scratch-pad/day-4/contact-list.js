// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that 
 * returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      2. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      3. length(): returns the number of contacts within the list.
 *      4. find(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object 
 * if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 * 
 * BONUS : add an all() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The all() Function should 
 *         return a String formated with all the full-names of the separated contacts
 *         with a line-break, like so:
 *          
 *         myContacts.add(); // => Max Gaudin
 *                                 John Fraboni
 *                                 Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 * 
 */
 
// var contacts = require('./data/contact.json');

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
        };    
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];

    return {
        addContact: function(contact) {
            contacts.push(contact);
        },
        length: function() {
            return contacts.length;
        },
        find: function(fullName) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].nameFirst + " " + contacts[i].nameLast === fullName) {
                    return contacts[i];
                } else {
                    return undefined;
                }
            }
        },
        removeContact: function(contact) {
            contacts.pop(contact); 
        },
        all: function() {
            var string = "";
            for (var j = 0; j < contacts.length; j++) {
                if (j < contacts.length - 1) {
                    string += contacts[j].nameFirst + " " + contacts[j].nameLast + "\n";
                } else {
                    string += contacts[j].nameFirst + " " + contacts[j].nameLast;
                }
            }
            return string;
            
        }
    }; 

}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}