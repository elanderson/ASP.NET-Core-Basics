import { inject } from 'aurelia-framework';
import { Contact } from './contact';
import { ContactService } from './contactService';

@inject(ContactService)
export class ContactDetail {
     contact: Contact;
     hasContactId: boolean;

    constructor(private contactService: ContactService) { }

    activate(parms, routeConfig) {
        this.hasContactId = parms.id;

        if (this.hasContactId) {
            return this.contactService.getById(parms.id)
                .then(contact => this.contact = contact);          
        }

        return null;

    }

}