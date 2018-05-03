import {Participant} from './participant.model';

export class Wish {
  id: string;
  url: string;
  title: string;
  description: string;
  image: string;
  participants: Participant[] = [];
  value = 0;
  currentValue = 0;
}
