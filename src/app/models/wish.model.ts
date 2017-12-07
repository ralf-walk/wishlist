import { Donor } from './donor.model'


export class Wish {

    title: string;
    description: string;
    value: number;

    donors: Donor[] = [];

    constructor(title: string, description: string, value: number) {
        this.title = title;
        this.description = description;
        this.value = value;
    }

    public addDonor(donor: Donor) {
        this.donors.push(donor);
    }

    public getDonors(): Donor[] {
        return this.donors;
    }
}