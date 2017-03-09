"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require("aurelia-framework");
var contact_1 = require("./contact");
var contactService_1 = require("./contactService");
var ContactDetail = (function () {
    function ContactDetail(contactService) {
        this.contactService = contactService;
        this.contact = new contact_1.Contact();
    }
    ContactDetail.prototype.activate = function (parms, routeConfig) {
        var _this = this;
        this.hasContactId = parms.id;
        if (this.hasContactId) {
            return this.contactService.getById(parms.id)
                .then(function (contact) { return _this.contact = contact; });
        }
        return null;
    };
    ContactDetail.prototype.reset = function () {
        this.contact = new contact_1.Contact();
    };
    ContactDetail.prototype.save = function () {
        var _this = this;
        this.contactService.save(this.contact)
            .then(function (contact) { return _this.contact = contact; })
            .then(function () { return _this.hasContactId = true; });
    };
    return ContactDetail;
}());
ContactDetail = __decorate([
    aurelia_framework_1.inject(contactService_1.ContactService),
    __metadata("design:paramtypes", [contactService_1.ContactService])
], ContactDetail);
exports.ContactDetail = ContactDetail;
//# sourceMappingURL=contactDetail.js.map