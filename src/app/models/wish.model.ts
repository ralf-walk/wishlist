import { Participant } from './participant.model'
import { UUID } from 'angular2-uuid';
import { ModelService, Event } from './model.service'

export class Wish {

    title: string;
    description: string;
    participants: Participant[] = [];
    private _value: number;
    currentValue: number = 0;

    constructor(private modelService: ModelService, title: string, description: string, value: number) {
        this.title = title;
        this.description = description;
        this._value = value;

        this.modelService.observe().subscribe((e: Event) => {
            if (e.type == "PARTICIPANT_AMOUNT_UPDATED") {
                if (this.participants.indexOf(e.payload) > -1) {
                    this.calculateCurrentValue();
                }
            } else if (e.type == "PARTICIPANT_REMOVE") {
                let index = this.participants.indexOf(e.payload);
                if (index >= 0) {
                    this.participants.splice(index, 1);
                    this.calculateCurrentValue();
                }
            }
        });
    }

    public remove() {
        this.modelService.fireEvent({ type: "WISH_REMOVE", payload: this })
    }

    public addParticipant(participant: Participant) {
        this.participants.push(participant);
        this.calculateCurrentValue()
    }

    public getParticipants(): Participant[] {
        return this.participants;
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
        this.participants.forEach((participant) => {
            currentValue += participant.amount;
        })
        this.currentValue = currentValue;
    }
}