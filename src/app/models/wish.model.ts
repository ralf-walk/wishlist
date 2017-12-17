import { Donor } from './donor.model'
import { UUID } from 'angular2-uuid';
import { ModelService } from './model.service'


export class Wish {

    title: string;
    description: string;
    deleteMe: boolean = false;
    donors: Donor[] = [];
    private _value: number;

    constructor(private modelService: ModelService, title: string, description: string, value: number) {
        this.title = title;
        this.description = description;
        this._value = value;
    }

    public remove() {
        this.modelService.fireEvent({ type: "WISH_REMOVE", payload: this})
    }

    public addDonor(donor: Donor) {
        donor.wish = this;
        this.donors.push(donor);
    }

    public getDonors(): Donor[] {
        return this.donors;
    }

    get value(): number {
            return this._value;
    }

    set value(newValue: number) {
        this._value = newValue;
        if (this.modelService) {
            this.modelService.fireEvent({ type: "WISH_VALUE_UPDATED", payload: this})
        }
    }
}