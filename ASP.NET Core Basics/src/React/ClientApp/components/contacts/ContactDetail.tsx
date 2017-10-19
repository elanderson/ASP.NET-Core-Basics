import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { Contact } from './contact';
import { ContactService } from './contactService';

interface ContactListState {
    id: string;
    contacts: Contact[];
    loading: boolean;
}

export class ContactDetail extends React.Component<RouteComponentProps<{}>, ContactListState> {

    constructor(props: any) {
        super();
        this.state = { id: props.match.params.id, contacts: [], loading: true };

        let contactService = new ContactService();
        contactService.getAll()
            .then(data => {
                this.setState({ contacts: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ContactDetail.renderContactsTable(this.state.contacts);

        return <div>
            <h1>Contact List {this.state.id}</h1>
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
