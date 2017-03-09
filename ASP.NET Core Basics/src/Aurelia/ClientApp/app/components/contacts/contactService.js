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
var aurelia_fetch_client_1 = require("aurelia-fetch-client");
var aurelia_framework_1 = require("aurelia-framework");
var contact_1 = require("./contact");
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        http.configure(function (config) {
            config.useStandardConfiguration()
                .withBaseUrl('http://localhost:13322/api/contactsApi/');
        });
    }
    ContactService.prototype.getAll = function () {
        return this.http.fetch('')
            .then(function (response) { return response.json(); })
            .then(function (contacts) { return Array.from(contacts, function (c) { return new contact_1.Contact(c); }); })
            .catch(function (error) { return console.log(error); });
    };
    ContactService.prototype.getById = function (id) {
        return this.http.fetch(id)
            .then(function (response) { return response.json(); })
            .then(function (contact) { return new contact_1.Contact(contact); })
            .catch(function (error) { return console.log(error); });
    };
    ContactService.prototype.save = function (contact) {
        return this.http.fetch('', {
            method: 'post',
            body: aurelia_fetch_client_1.json(contact)
        })
            .then(function (response) { return response.json(); })
            .then(function (contact) { return new contact_1.Contact(contact); })
            .catch(function (error) { return console.log(error); });
    };
    return ContactService;
}());
ContactService = __decorate([
    aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
    __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contactService.js.map