import { Donor } from './donor.model'
import { UUID } from 'angular2-uuid';
import { ModelService, Event } from './model.service'

export class Wish {

    title: string;
    description: string;
    donors: Donor[] = [];
    private _value: number;
    currentValue: number = 0;

    constructor(private modelService: ModelService, title: string, description: string, value: number) {
        this.title = title;
        this.description = description;
        this._value = value;

        this.modelService.observe().subscribe((e: Event) => {
            if (e.type == "DONOR_VALUE_UPDATED") {
                if (this.donors.indexOf(e.payload) > -1) {
                    this.calculateCurrentValue();
                }
            } else if (e.type == "DONOR_REMOVE") {
                let index = this.donors.indexOf(e.payload);
                if (index > 0) {
                    this.donors.splice(index, 1);
                    this.calculateCurrentValue();
                }
            }
        });
    }

    public remove() {
        this.modelService.fireEvent({ type: "WISH_REMOVE", payload: this })
    }

    public addDonor(donor: Donor) {
        donor.wish = this;
        this.donors.push(donor);
        this.calculateCurrentValue()
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
            this.modelService.fireEvent({ type: "WISH_VALUE_UPDATED", payload: this })
        }
    }

    public getPercent() {
        return Math.round((this.currentValue / this.value)*100);
    }

    private calculateCurrentValue() {
        let currentValue = 0;
        this.donors.forEach((donor) => {
            currentValue += donor.amount;
        })
        this.currentValue = currentValue;
    }
}