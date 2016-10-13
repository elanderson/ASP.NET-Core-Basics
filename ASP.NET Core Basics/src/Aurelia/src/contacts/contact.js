export class Contact {
    constructor(data) {
        Object.assign(this, data);
    }

    getAddress() {
        return `${this.address} ${this.city}, ${this.state} ${this.postalCode}`;
    }
}