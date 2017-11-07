import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Contact } from './contact';
import { ContactService } from './contactService';

@Component
export default class ContactDetailComponent extends Vue {
    contact: Contact = new Contact();
    @Prop() id: string;

    mounted() {
        let contactService = new ContactService();
        contactService.getById(this.id)
            .then(data => {
                this.contact = data;
            });
    }
}