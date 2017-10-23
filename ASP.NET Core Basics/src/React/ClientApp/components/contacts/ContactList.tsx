import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
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
            <Link to={'contactdetail'}>Create New Contact</Link>
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
                        <td><Link to={`contactdetail/${contact.id}`}>{contact.id}</Link></td>
                        <td>{contact.name}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}
