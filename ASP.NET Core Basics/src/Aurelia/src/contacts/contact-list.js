import { ContactService } from './contact-service';

export class ContactList {
    static inject() { return [ContactService] };

    constructor(contactService) {
        this.contactService = contactService;
        this.contacts = [];
    }

    created() {
        this.contactService.GetAll()
            .then(contacts => this.contacts = contacts);
    }
}