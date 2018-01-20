import { Wish } from './wish.model'
import { ModelService } from '../models/model.service'

export class Participant {

    name: string;
    private _amount: number;

    constructor(private modelService: ModelService, name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    remove() {
        this.modelService.fireEvent({ type: "PARTICIPANT_REMOVE", payload: this })
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
        this.modelService.fireEvent({ type: "PARTICIPANT_AMOUNT_UPDATED", payload: this })
    }
}