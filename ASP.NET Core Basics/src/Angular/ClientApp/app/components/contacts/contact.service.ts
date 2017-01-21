import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Contact } from './contact';

@Injectable()
export class ContactService {
    baseUrl = 'http://localhost:13322/api/contactsApi/';

    constructor(private http: Http) {
    }

    getAll(): Promise<Contact[]> {
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(response => response.json())
            .then(contacts => Array.from(contacts, c => new Contact(c)))
            .catch(error => console.log(error));
    }

    getById(id: string): Promise<Contact> {
        return this.http.get(this.baseUrl + id)
            .toPromise()
            .then(response => response.json())
            .then(contact => new Contact(contact))
            .catch(error => console.log(error));
    }

    save(contact: Contact): Promise<Contact> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl, JSON.stringify(contact), options)
            .toPromise()
            .then(response => response.json())
            .then(contact => new Contact(contact))
            .catch(error => console.log(error));
    }
}