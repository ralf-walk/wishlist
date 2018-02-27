import { Wish } from './wish.model'

export class Wishlist {

    id: string;
    password: string;
    title: string;
    wishes: Wish[] = [];
    sum: number = 0;
}