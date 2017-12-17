import { Wish } from './wish.model'

export class Donor {

    name: string;
    amount: number;
    wish: Wish;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    delete() {
        this.wish.donors.splice(this.wish.donors.indexOf(this), 1);
    }
}