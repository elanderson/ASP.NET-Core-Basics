"use strict";
var Contact = (function () {
    function Contact(data) {
        if (data == null)
            return;
        Object.assign(this, data);
    }
    Contact.prototype.getAddress = function () {
        return this.address + " " + this.city + ", " + this.state + " " + this.postalCode;
    };
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map