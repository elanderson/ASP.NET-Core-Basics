import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Contact } from './contact';

@Injectable()
export class ContactService {

    constructor(private http: Http) {
    } 

    getAll(): Promise<Contact[]> {
        return this.http.get('http://localhost:13322/api/contactsApi/')
            .toPromise()
            .then(response => response.json())
            .then(contacts => Array.from(contacts, c => new Contact(c)))
            .catch(error => console.log(error));
    }
}