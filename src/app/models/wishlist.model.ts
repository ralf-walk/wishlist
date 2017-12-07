import { Wish } from './wish.model'

export class Wishlist {

    title: string;

    wishes: Wish[] = [];

    constructor(title: string) {
        this.title = title;
    }

    public addWish(wish: Wish) {
        this.wishes.push(wish);
    }

    public getWishes() {
        return this.wishes;
    }
}