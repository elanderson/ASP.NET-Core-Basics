import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import 'isomorphic-fetch';
import { Contact } from './contact';
import { ContactService } from './contactService';

interface ContactDetailState {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
    email: string;
    loading: boolean;
}

export class ContactDetail extends React.Component<RouteComponentProps<{}>, ContactDetailState> {

    constructor(props: any) {
        super();


        if (props.match.params.id == undefined) {
            this.state = {
                id: props.match.params.id,
                name: '', address: '', city: '',
                state: '', postalCode: '', phone: '',
                email: '',
                loading: false
            };
        }
        else {
            this.state = {
                id: props.match.params.id,
                name: '', address: '', city: '',
                state: '', postalCode: '', phone: '',
                email: '',
                loading: true
            };

            let contactService = new ContactService();
            contactService.getById(this.state.id)
                .then(data => {
                    this.setState({
                        name: data.name, address: data.address, city: data.city,
                        state: data.state, postalCode: data.postalCode, phone: data.phone,
                        email: data.email,
                        loading: false
                    });
                });
        }
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.state.id != undefined
                ? this.renderExistingContact()
                : this.renderNewContact();

        return <div>
            <h1>Contact Detail</h1>
            <hr />
            {contents}
            <NavLink to={'/contactlist'}>Back to List</NavLink>
            <hr />
        </div>;
    }

    private renderExistingContact() {
        return <dl className="dl-horizontal">
            <dt>ID</dt>
            <dd>{this.state.id}</dd>
            <dt>Name</dt>
            <dd>{this.state.name}</dd>
            <dt>Address</dt>
            <dd>{this.state.address} {this.state.city}, {this.state.state} {this.state.postalCode}</dd>
            <dt>Phone</dt>
            <dd>{this.state.phone}</dd>
            <dt>Email</dt>
            <dd>{this.state.email}</dd>
        </dl>;
    }

    private handleChange(event: any): void {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    private reset() {
        this.setState({
            name: '', address: '', city: '',
            state: '', postalCode: '', phone: '',
            email: '' });
    }

    private renderNewContact() {
        return (
            <div>
                <form role="form" className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="name" className="form-control" name="name" value={this.state.name} onChange={(e: any) => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Address</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="address" className="form-control" name="address" value={this.state.address} onChange={(e: any) => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">City</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="city" className="form-control" name="city" value={this.state.city} onChange={(e: any) => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">State</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="state" className="form-control" name="state" value={this.state.state} onChange={(e: any) => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Zip</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="zip" className="form-control" name="postalCode" value={this.state.postalCode} onChange={(e: any) => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Phone</label>
                        <div className="col-sm-10">
                            <input type="text" placeholder="phone" className="form-control" name="phone" value={this.state.phone} onChange={(e: any) => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" placeholder="email" className="form-control" name="email" value={this.state.email} onChange={(e: any) => this.handleChange(e)} />
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
