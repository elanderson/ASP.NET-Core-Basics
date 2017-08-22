import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Contact } from './contact';

@Injectable()
export class ContactService {
    baseUrl = 'http://localhost:13322/api/contactsApi/';

    constructor(private http: Http) {
    }

    getAll(): Promise<Contact[]> {
        return this.http.get(this.baseUrl)
            .map((response: Response) => Array.from(response.json(), d => new Contact(d)))
            .toPromise();
    }

    getById(id: string): Promise<Contact> {
        return this.http.get(this.baseUrl + id)
            .map((response: Response) => new Contact(response.json()))
            .toPromise();
    }

    save(contact: Contact): Promise<Contact> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl, JSON.stringify(contact), options)
            .map((response: Response) => new Contact(response.json()))
            .toPromise();
    }
}