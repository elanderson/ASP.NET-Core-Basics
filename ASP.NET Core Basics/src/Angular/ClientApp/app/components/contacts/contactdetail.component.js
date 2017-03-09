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
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var contact_1 = require("./contact");
var contact_service_1 = require("./contact.service");
var ContactDetailComponent = (function () {
    function ContactDetailComponent(route, router, contactService) {
        this.route = route;
        this.router = router;
        this.contactService = contactService;
        this.contact = new contact_1.Contact();
    }
    ContactDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var contactId;
        this.route.params
            .subscribe(function (params) { return contactId = params['id']; });
        this.hasContactId = contactId != undefined;
        if (this.hasContactId) {
            this.contactService.getById(contactId)
                .then(function (contact) { return _this.contact = contact; });
        }
    };
    ContactDetailComponent.prototype.reset = function () {
        this.contact = new contact_1.Contact();
    };
    ContactDetailComponent.prototype.save = function () {
        var _this = this;
        this.contactService.save(this.contact)
            .then(function (contact) { return _this.contact = contact; })
            .then(function () { return _this.hasContactId = true; });
    };
    return ContactDetailComponent;
}());
ContactDetailComponent = __decorate([
    core_1.Component({
        selector: 'contactdetail',
        template: require('./contactdetail.component.html'),
        providers: [contact_service_1.ContactService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        contact_service_1.ContactService])
], ContactDetailComponent);
exports.ContactDetailComponent = ContactDetailComponent;
//# sourceMappingURL=contactdetail.component.js.map