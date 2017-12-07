import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Wishlist } from '../models/wishlist.model'
import { Wish } from '../models/wish.model'
import { Donor } from '../models/donor.model'

@Injectable()
export class WishlistService {

  wishlists: Wishlist[] = [];

  constructor() {
    let geburtstagWishlist = new Wishlist('Geburtstag');
    geburtstagWishlist.addWish(new Wish("Barby", "Eine Barby von etwa 20cm Größe", 500));

    let wish = new Wish("Playmobil", "Bauernhof oder so", 400);
    wish.addDonor(new Donor("Hans", 200));
    wish.addDonor(new Donor("Maria", 34));

    geburtstagWishlist.addWish(wish);
    this.wishlists.push(geburtstagWishlist);

    this.wishlists.push(new Wishlist('Ostern'));
    this.wishlists.push(new Wishlist('Weihnachten'));
  }

  public getWishlists(): Observable<Wishlist[]> {
    return Observable.of(this.wishlists);
  }

  public addWish(wish: Wish): void {
    this.wishlists[0].addWish(wish);
  }
}
