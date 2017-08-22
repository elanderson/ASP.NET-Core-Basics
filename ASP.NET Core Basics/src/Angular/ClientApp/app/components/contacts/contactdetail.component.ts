import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
    selector: 'contactdetail',
    template: './contactdetail.component.html',
    providers: [ContactService]
})
export class ContactDetailComponent implements OnInit {
    contact = new Contact();
    hasContactId: boolean;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private contactService: ContactService) { }

    ngOnInit(): void {
        var contactId = "";

        this.route.params
            .subscribe((params: Params) => contactId = params['id']);
        this.hasContactId = contactId != undefined;

        if (this.hasContactId) {
            this.contactService.getById(contactId)
                .then((contact: Contact) => this.contact = contact);
        }
    }

    reset() {
        this.contact = new Contact();
    }

    save() {
        this.contactService.save(this.contact)
            .then(contact => this.contact = contact)
            .then(() => this.hasContactId = true);
    }
}