import { HttpClient } from 'aurelia-fetch-client';
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

    getAll() : Promise<Contact[]> {
        return this.http.fetch('')
            .then(response => response.json())
            .then(contacts => Array.from(contacts, c => new Contact(c)))
            .catch(error => console.log(error));
    }

}