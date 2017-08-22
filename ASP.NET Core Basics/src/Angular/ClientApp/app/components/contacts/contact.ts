export class Contact {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    phone: string;
    email: string;

    constructor(data?: any) {
        if (data == null) return;
        Object.assign(this, data);
    }

    getAddress(): string {
        return `${this.address} ${this.city}, ${this.state} ${this.postalCode}`;
    }

}