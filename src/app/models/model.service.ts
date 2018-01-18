import { Observable, Observer, Subscription, ConnectableObservable } from 'rxjs'
import { Injectable } from '@angular/core';
import { Wish } from './wish.model'
import { Wishlist } from './wishlist.model'
import { Participant } from './participant.model'

export interface Event {
  type: string;
  payload: any;
}

@Injectable()
export class ModelService {

  wishlists: Wishlist[] = [];

  observer: Observer<Event>;
  observable$: ConnectableObservable<Event>;

  constructor() {
    let observable: Observable<Event> = Observable.create((observer) => {
      this.observer = observer;
    });
    this.observable$ = observable.publish();
    this.observable$.connect();
  }

  fireEvent(event: Event) {
    this.observer.next(event);
  }

  observe(): Observable<Event> {
    return this.observable$;
  }

  createWishlist(title: string, maxSum?: number): Wishlist {
    return new Wishlist(this, title, maxSum);
  }

  createWish(title: string, description: string, value: number): Wish {
    return new Wish(this, title, description, value);
  }

  createParticipant(name: string, amount: number): Participant {
    return new Participant(this, name, amount);
  }

  addWishlist(wishlist: Wishlist) {
    this.wishlists.push(wishlist);

    this.observer.next({
      type: 'WISHLIST_UPDATE',
      payload: this.wishlists
    })
  }

  deleteWishlist(wishlist: Wishlist) {
    let index = this.wishlists.indexOf(wishlist);
    if (index > -1) {
      this.wishlists.splice(index, 1);
    }
    this.observer.next({
      type: 'WISHLIST_UPDATE',
      payload: this.wishlists
    })
  }

  updateWishlists() {
    let geburtstagWishlist = this.createWishlist('Geburtstag', 130);
    geburtstagWishlist.addWish(this.createWish("Barby", "Eine Barby von etwa 20cm Größe", 23));

    let wish = this.createWish("Playmobil", "Bauernhof oder so", 99);
    wish.addParticipant(this.createParticipant("Hans", 12));
    wish.addParticipant(this.createParticipant("Maria", 34));

    geburtstagWishlist.addWish(wish);

    this.wishlists.push(geburtstagWishlist);

    this.wishlists.push(this.createWishlist('Ostern'));
    this.wishlists.push(this.createWishlist('Weihnachten'));

    this.observer.next({
      type: 'WISHLIST_UPDATE',
      payload: this.wishlists
    })
  }
}
