import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Contact } from './contact';
import { ContactService } from './contactService';

@Component
export default class ContactListComponent extends Vue {
    contacts: Contact[] = [];

    mounted() {
        let contactService = new ContactService();
        contactService.getAll()
            .then(data => {
                this.contacts = data;
            });
    }
}