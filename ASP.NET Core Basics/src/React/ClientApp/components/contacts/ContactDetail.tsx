import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import 'isomorphic-fetch';
import { Contact } from './contact';
import { ContactService } from './contactService';

interface ContactDetailState {
    id: string;
    contact: Contact | undefined;
    loading: boolean;
}

export class ContactDetail extends React.Component<RouteComponentProps<{}>, ContactDetailState> {

    constructor(props: any) {
        super();
        this.state = { id: props.match.params.id, contact: undefined, loading: true };

        let contactService = new ContactService();
        contactService.getById(this.state.id)
            .then(data => {
                this.setState({ contact: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.contact != undefined
                ? ContactDetail.renderExistingContact(this.state.contact)
                : <p>No contact</p>;

        return <div>
            <h1>Contact Detail</h1>
            <hr />
            {contents}
            <NavLink to={'/contactlist'}>Back to List</NavLink>
            <hr />
        </div>;
    }

    private static renderExistingContact(contact: Contact) {
        return <dl className="dl-horizontal">
                   <dt>ID</dt>
                   <dd>{contact.id}</dd>
                   <dt>Name</dt>
                   <dd>{contact.name}</dd>
                   <dt>Address</dt>
                   <dd>{contact.getAddress()}</dd>
                   <dt>Phone</dt>
                   <dd>{contact.phone}</dd>
                   <dt>Email</dt>
                   <dd>{contact.email}</dd>
               </dl>;
    }
}
