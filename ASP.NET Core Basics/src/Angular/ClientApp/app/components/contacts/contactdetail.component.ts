import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
    selector: 'contactdetail',
    template: require('./contactdetail.component.html'),
    providers: [ContactService]
})
export class ContactDetailComponent implements OnInit {
    contacts: Contact[];

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
        this.contactService.getAll()
            .then(contacts => this.contacts = contacts);
    }
}