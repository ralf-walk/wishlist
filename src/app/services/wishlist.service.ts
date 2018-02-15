import { Observable, Observer, Subscription, ConnectableObservable } from 'rxjs'
import { Injectable } from '@angular/core';
import { Wish } from '../models/wish.model';
import { Wishlist } from '../models/wishlist.model';
import { Participant } from '../models/participant.model';
import { DatabaseService } from './database.service'

export interface Event {
  type: string;
  payload: any;
}


@Injectable()
export class WishlistService {

  wishlist = null;
  saveOnChange = true;

  observer: Observer<Event>;
  observable$: ConnectableObservable<Event>;

  constructor(private backend: DatabaseService) {
    let observable: Observable<Event> = Observable.create((observer) => {
      this.observer = observer;
    });
    this.observable$ = observable.publish();
    this.observable$.connect();
  }

  fireEvent(event: Event) {
    // 1. Fire the value, so that the model can adjust itself
    this.observer.next(event);

    // 2. Save the wishlist
    if (this.saveOnChange) {
      this._saveWishlist(this.wishlist);
    }
  }

  observe(): Observable<Event> {
    return this.observable$;
  }

  // Backend Calls

  loadWishlist(wishlistId: string, wishlistPassword: string) {
    this.backend.loadWishlist(wishlistId, wishlistPassword).then((event) => {
      this._updateWishlist(event.payload);
    });
  }

  _saveWishlist(wishlist) {

    // convert wishlist object to json
    const replacer = (key, value) => {
      if (key.startsWith('_')) {
        return undefined;
      }
      return value;
    }
    let wishlistString = JSON.stringify(wishlist, replacer);

    this.backend.saveWishlist(wishlistString).then((event) => {
      this._updateWishlist(event.payload);
    });
  }

  createWishlist(title: string) {
    this.backend.createWishlist(title).then((event) => {
      this._updateWishlist(event.payload);
    });
  }

  private _updateWishlist(wishlistJson) {

    this.saveOnChange = false;
    // convert json object to wishlist
    let wishlist = new Wishlist(this);
    wishlist.id = wishlistJson.id;
    wishlist.password = wishlistJson.password;
    wishlist.title = wishlistJson.title;

    wishlistJson.wishes.forEach((w) => {
      let wish: Wish = new Wish(this);
      wish.id = w.id;
      wish.title = w.title;
      wish.description = w.description;
      wish.image = w.image;
      wish.currentValue = w.currentValue;
      wishlist.addWish(wish);

      w.participants.forEach((p) => {
        let participant = new Participant(this);
        participant.id = p.id;
        participant.name = p.name;
        participant.amount = p.amount;
        wish.addParticipant(participant);
      })
    });
    this.wishlist = wishlist;
    this.saveOnChange = true;

    this.observer.next({
      type: 'WISHLIST_UPDATE',
      payload: this.wishlist
    });
  }

  // Factory methods
  createWish(): Wish {
    return new Wish(this);
  }

  createParticipant(): Participant {
    return new Participant(this);
  }
  // CREATE

  // createWishlist(title: string) {
  //   this.backend.createWishlist(title).then((event) => {

  //     let wishlistJson = event.payload;
  //     let wihlist = new Wishlist(this, wishlistJson.id, wishlistJson.title, wishlistJson.edit);

  //     this.observer.next({
  //       type: 'WISHLIST_CREATE',
  //       payload: event.payload
  //     });
  //   });
  // }

  // createWish(title: string, description: string, image: string, value: number) {
  //   this.backend.createWish(title, description, image, value).then((event) => {

  //     let wishJson = event.payload;
  //     let wish = new Wish(this, wishJson.id, wishJson.title, wishJson.description, wishJson.image, wishJson.value);

  //     this.observer.next({
  //       type: 'WISH_CREATE',
  //       payload: event.payload
  //     });
  //   });
  // }

  // createParticipant(wishId: string, name: string, amount: number) {
  //   this.backend.createParticipant(wishId, name, amount).then((event) => {

  //     let participantJson = event.payload;
  //     let participant = new Participant(this, participantJson.id, participantJson.name, participantJson.value);

  //     this.observer.next({
  //       type: 'PARTICIPANT_CREATE',
  //       payload: participant
  //     });
  //   });
  // }

  // UPDATE

  // updateWishlist(wishlist: Wishlist) {
  //   this.backend.updateWishlist(wishlist).then((event) => {

  //     this.observer.next({
  //       type: 'WISHLIST_UPDATE',
  //       payload: event.payload
  //     });
  //   });
  // }

  // updateWish(wish: Wish) {
  //   this.backend.updateWish(wish).then((event) => {

  //     this.observer.next({
  //       type: 'WISH_UPDATE',
  //       payload: event.payload
  //     });
  //   });
  // }

  // updateParticipant(wishId: string, participant: Participant) {
  //   this.backend.updateParticipant(wishId, participant).then((event) => {

  //     this.observer.next({
  //       type: 'PARTICIPANT_UPDATE',
  //       payload: event.payload
  //     });
  //   });
  // }

}
