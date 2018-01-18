import { Wish } from './wish.model'
import { ModelService } from '../models/model.service'

export class Participant {

    name: string;
    amount: number;

    constructor(private modelService: ModelService, name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }

    remove() {
        this.modelService.fireEvent({ type: "PARTICIPANT_REMOVE", payload: this})
    }
}