import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import 'isomorphic-fetch';
import { Contact } from './contact';
import { ContactService } from './contactService';

interface ContactDetailState {
    id: string;
    contact: Contact;
    loading: boolean;
}

export class ContactDetail extends React.Component<RouteComponentProps<{}>, ContactDetailState> {

    constructor(props: any) {
        super();


        if (props.match.params.id == undefined) {
            this.state = { id: props.match.params.id, contact: new Contact(), loading: false };
        }
        else {
            this.state = { id: props.match.params.id, contact: new Contact(), loading: true };

            let contactService = new ContactService();
            contactService.getById(this.state.id)
                .then(data => {
                    this.setState({ contact: data, loading: false });
                });
        }
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.id != undefined
                ? ContactDetail.renderExistingContact(this.state.contact)
                : this.renderNewContact();

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

    private reset() {
        this.setState({ contact: new Contact() });
    }

    private renderNewContact() {
        return (
            <div>
                <form role="form" className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="name" className="form-control" value={this.state.contact.name} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="address" className="form-control" value={this.state.contact.address} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">City</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="city" className="form-control" value={this.state.contact.city} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">State</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="state" className="form-control" value={this.state.contact.state} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Zip</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="zip" className="form-control" value={this.state.contact.postalCode} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Phone</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="phone" className="form-control" value={this.state.contact.phone} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" placeholder="email" className="form-control" value={this.state.contact.email} />
                        </div>
                    </div>
                </form>
                <div className="text-center">
                    <button className="btn btn-success btn-lg" type="submit">Save</button>
                    <button className="btn btn-danger btn-lg" onClick={() => this.reset()}>Reset</button>
                </div >
            </div>
        );
    }

}
