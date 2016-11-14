export class Contact {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
    email: string;

    constructor(data) {
        Object.assign(this, data);
    }

    getAddress() {
        return `${this.address} ${this.city}, ${this.state} ${this.postalCode}`;
    }

}