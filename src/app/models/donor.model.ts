import { Wish } from './wish.model'
import { ModelService } from '../models/model.service'

export class Donor {

    name: string;
    amount: number;
    wish: Wish;

    constructor(private modelService: ModelService, name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    remove() {
        this.modelService.fireEvent({ type: "DONOR_REMOVE", payload: this})
    }
}