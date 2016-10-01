import { HttpClient } from 'aurelia-fetch-client';

export class ContactService {
    static inject() { return [HttpClient] };

    constructor(http) {
        this.http = http;

        this.http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:13322/api/contactsApi/');
        });
    }

    GetAll() {
       return this.http.fetch('')
            .then(response => response.json())
            .catch(error => console.log(error));
    }
}