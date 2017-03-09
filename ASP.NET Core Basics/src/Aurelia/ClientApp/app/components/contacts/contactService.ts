import { HttpClient, json } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { Contact } from './contact';

@inject(HttpClient)
export class ContactService {

    constructor(private http: HttpClient) {
        http.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl('http://localhost:13322/api/contactsApi/');
        });
    }

    getAll(): Promise<Contact[]> {
        return this.http.fetch('')
            .then(response => response.json() as Promise<Contact[]>)
            .then(contacts => Array.from(contacts, c => new Contact(c)))
            .catch(error => console.log(error));
    }

    getById(id: string): Promise<Contact> {
        return this.http.fetch(id)
            .then(response => response.json())
            .then(contact => new Contact(contact))
            .catch(error => console.log(error));
    }

    save(contact: Contact): Promise<Contact> {
        return this.http.fetch('',
            {
                method: 'post',
                body: json(contact)
            })
            .then(response => response.json())
            .then(contact => new Contact(contact))
            .catch(error => console.log(error));
    }

}