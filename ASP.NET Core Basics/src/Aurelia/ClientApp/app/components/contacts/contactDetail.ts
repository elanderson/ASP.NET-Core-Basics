import { inject } from 'aurelia-framework';
import { Contact } from './contact';
import { ContactService } from './contactService';

@inject(ContactService)
export class ContactDetail {
     contact: Contact;

    constructor(private contactService: ContactService) { }

    activate(parms, routeConfig) {
        return this.contactService.getById(parms.id)
            .then(contact => this.contact = contact);
    }

}