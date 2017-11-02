import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ContactListComponent extends Vue {
    contacts: Contact[] = [];

    mounted() {
        fetch('http://localhost:13322/api/contactsApi/')
            .then(response => response.json() as Promise<Contact[]>)
            .then(data => {
                this.contacts = data;
            });
    }
}

interface Contact {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
    email: string;
}