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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var contact_1 = require("./contact");
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:13322/api/contactsApi/';
    }
    ContactService.prototype.getAll = function () {
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (contacts) { return Array.from(contacts, function (c) { return new contact_1.Contact(c); }); })
            .catch(function (error) { return console.log(error); });
    };
    ContactService.prototype.getById = function (id) {
        return this.http.get(this.baseUrl + id)
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (contact) { return new contact_1.Contact(contact); })
            .catch(function (error) { return console.log(error); });
    };
    ContactService.prototype.save = function (contact) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl, JSON.stringify(contact), options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (contact) { return new contact_1.Contact(contact); })
            .catch(function (error) { return console.log(error); });
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map