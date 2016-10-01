import { ContactService } from './services/contactService';

export class App {
    static inject() { return [ContactService] };

    constructor(contactService) {
        this.message = 'Hello World!';
        contactService.GetAll()
            .then(result => {
                this.message = `Contact Results: 
                                ${result.map((contact) => contact.name)}`;
            });
    }
}