import 'isomorphic-fetch';
import { Contact } from './contact';

export class ContactService {

    private baseUrl = 'http://localhost:13322/api/contactsApi/';

    getAll(): Promise<Contact[]> {
        return fetch(this.baseUrl)
            .then(response => response.json() as Promise<Contact[]>)
            .then(contacts => Array.from(contacts, c => new Contact(c)));
    }

    getById(id: string): Promise<Contact> {
        return fetch(`${this.baseUrl}${id}`)
            .then(response => response.json())
            .then(contact => new Contact(contact));
    }

    save(contact: Contact): Promise<Contact> {
        return fetch(this.baseUrl,
                {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(contact)
                })
            .then(response => response.json())
            .then(contact => new Contact(contact));
    }

}