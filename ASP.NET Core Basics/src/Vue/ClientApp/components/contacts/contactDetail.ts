import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Contact } from './contact';
import { ContactService } from './contactService';

@Component
export default class ContactDetailComponent extends Vue {
    contact: Contact;

    mounted() {
        let contactService = new ContactService();
        contactService.getById(this.$props.id)
            .then(data => {
                this.contact = data;
            });
    }
}