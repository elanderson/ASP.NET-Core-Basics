import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
    selector: 'contactlist',
    template: './contactlist.component.html',
    providers: [ContactService]
})
export class ContactListComponent implements OnInit {
    contacts: Contact[];
    selectedContactId: number = null;

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
        this.contactService.getAll()
            .then(contacts => this.contacts = contacts);
    }

    onSelect(contact) {
        this.selectedContactId = contact.id;
    }
}