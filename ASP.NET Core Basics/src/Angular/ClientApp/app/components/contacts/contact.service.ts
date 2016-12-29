import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
}