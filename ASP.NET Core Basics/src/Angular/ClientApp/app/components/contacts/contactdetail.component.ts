import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
    selector: 'contactdetail',
    template: require('./contactdetail.component.html'),
    providers: [ContactService]
})
export class ContactDetailComponent implements OnInit {
    contact: Contact;
    hasContactId: boolean;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private contactService: ContactService) { }

    ngOnInit(): void {
        var contactId: string;

        this.route.params
            .switchMap((params: Params) => contactId = params['id']);

        console.log(this.route.params);
        this.hasContactId = contactId == "";

        if (this.hasContactId) {
            this.contactService.getById(contactId)
                .then((contact: Contact) => this.contact = contact);
        }
    }
}