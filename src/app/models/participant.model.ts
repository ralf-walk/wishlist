import { Wish } from './wish.model'
import { WishlistService } from '../services/wishlist.service'

export class Participant {

    id: string;
    name: string;
    private _amount: number;

    constructor(private _wishlistService: WishlistService) {
    }

    remove() {
        this._wishlistService.fireEvent({ type: "PARTICIPANT_REMOVE", payload: this })
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
        this._wishlistService.fireEvent({ type: "PARTICIPANT_AMOUNT_UPDATED", payload: this })
    }
}