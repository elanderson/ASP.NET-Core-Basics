import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
    selector: 'contactdetail',
    template: require('./contactdetail.component.html'),
    providers: [ContactService]
})
export class ContactDetailComponent implements OnInit {
    contact: Contact;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private contactService: ContactService) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.contactService.getById(params['id']))
            .subscribe((contact :Contact) => this.contact = contact);
    }
}