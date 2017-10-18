import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { Contact } from './contact';
import { ContactService } from './contactService';

interface ContactListState {
    contacts: Contact[];
    loading: boolean;
}

export class ContactList extends React.Component<RouteComponentProps<{}>, ContactListState> {
    constructor() {
        super();
        this.state = { contacts: [], loading: true };

        let contactService = new ContactService();
        contactService.getAll()
            .then(data => {
                this.setState({ contacts: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ContactList.renderContactsTable(this.state.contacts);

        return <div>
            <h1>Contact List</h1>
            {contents}
        </div>;
    }

    private static renderContactsTable(contacts: Contact[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact =>
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}
