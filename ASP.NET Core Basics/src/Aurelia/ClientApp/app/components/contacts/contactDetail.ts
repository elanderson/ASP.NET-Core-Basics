import { inject } from 'aurelia-framework';
import { Contact } from './contact';
import { ContactService } from './contactService';

@inject(ContactService)
export class ContactDetail {
     contact: Contact = new Contact();
     hasContactId: boolean;

    constructor(private contactService: ContactService) { }

    activate(parms: any, routeConfig: any) {
        this.hasContactId = parms.id;

        if (this.hasContactId) {
            return this.contactService.getById(parms.id)
                .then(contact => this.contact = contact);
        }

        return null;
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