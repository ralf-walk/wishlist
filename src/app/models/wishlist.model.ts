import { Wish } from './wish.model'
import { ModelService, Event } from './model.service'

export class Wishlist {

    title: string;
    readonly wishes: Wish[] = [];
    sum: number = 0;

    constructor(private modelService: ModelService, title: string) {
        this.title = title;
        this.modelService.observe().subscribe((e: Event) => {
            if (e.type == "WISH_VALUE_UPDATED") {
                if (this.wishes.indexOf(e.payload) > -1) {
                    this.calculateSum();
                }
            } else if (e.type == "WISH_REMOVE") {
                let index = this.wishes.indexOf(e.payload);
                if (index >= 0) {
                    this.wishes.splice(index, 1);
                    this.calculateSum();
                }
            }
        });
    }

    addWish(wish: Wish) {
        this.wishes.push(wish);
        this.calculateSum()
    }

    getWishes() {
        return this.wishes;
    }

    private calculateSum() {
        let newSum = 0;
        this.wishes.forEach((wish) => {
            newSum += wish.value;
        })
        this.sum = newSum;
    }

    public deleteWishlist() {
        this.modelService.fireEvent({ type: "WISHLIST_UPDATE", payload: null })
    }
}