import { Participant } from './participant.model'

export class Wish {
    id: string;
    title: string;
    description: string;
    image: string;
    participants: Participant[] = [];
    value: number;
    currentValue: number = 0;
}