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

  private _wishlist: Wishlist = null;
  root = {
    wishlist : this._wishlist
  }

  observer: Observer<Event>;
  observable$: ConnectableObservable<Event>;

  getRoot() {
    return this.root;
  }

  constructor(private backend: DatabaseService) {
    let observable: Observable<Event> = Observable.create((observer) => {
      this.observer = observer;
    });
    this.observable$ = observable.publish();
    this.observable$.connect();
    this.root.wishlist = null;
  }

  // ### REDUCER ###
  fireEvent(event: Event) {

    switch (event.type) {

      case 'MODEL_CREATE_WISHLIST':
        {
          let wishlistInfo = event.payload;
          this.backend.createWishlist(wishlistInfo.title).then((event) => {
            this.root.wishlist = event.payload;
          });
        }
        break;

      case 'MODEL_LOAD_WISHLIST':
        {
          let wishlistInfo = event.payload;
          this.backend.loadWishlist(wishlistInfo.id, wishlistInfo.password).then((event) => {
            this.root.wishlist = event.payload;
          });
        }
        break;

      case 'MODEL_DELETE_WISHLIST':
        {
          this.root.wishlist = null;
          this.save();
        }
        break;

      case 'MODEL_ADD_WISH':
        {
          let wishInfo = event.payload;
          let wish: Wish = {
            id: Math.random().toString(36).substring(7),
            title: wishInfo.title,
            description: wishInfo.description,
            image: wishInfo.image,
            value: wishInfo.value,
            currentValue: null,
            participants: []
          }
          if (!this.root.wishlist.wishes) {
            this.root.wishlist.wishes = [];
          }
          this.root.wishlist.wishes.push(wish);
          this._calculateWishlistSum();
          this.save();
        }
        break;

      case 'MODEL_DELETE_WISH':
        {
          let wishInfo = event.payload;
          let wish = this._findWish(wishInfo.id);
          let index = this.root.wishlist.wishes.indexOf(wish);
          if (index >= 0) {
            this.root.wishlist.wishes.splice(index, 1);
            this._calculateWishlistSum();
          }
          this.save();
        }
        break;

      case 'MODEL_UPDATE_WISH':
        {
          let wishInfo = event.payload;
          let wish = this._findWish(wishInfo.id);
          if (wish) {
            wish.title = wishInfo.title;
            wish.description = wishInfo.description;
            wish.value = wishInfo.value;
            wish.image = wishInfo.image;
            this._calculateWishlistSum();
          }
          this.save();
        }
        break;

      case 'MODEL_ADD_PARTICIPANT':
        {
          let participantInfo = event.payload;
          let wish = this._findWish(participantInfo.wishId);
          let participant: Participant = {
            id: Math.random().toString(36).substring(7),
            name: participantInfo.name,
            amount: participantInfo.amount
          }
          wish.participants.push(participant);
          this._calculateWishSum(wish);
          this.save();
        }
        break;

      case 'MODEL_DELETE_PARTICIPANT':
        {
          let participantInfo = event.payload;
          let wish = this._findWish(participantInfo.wishId);
          let participant = this._findParticipant(participantInfo.wishId, participantInfo.id);
          let index = wish.participants.indexOf(participant);
          if (index >= 0) {
            wish.participants.splice(index, 1);
            this._calculateWishSum(wish);
          }
          this.save();
        }
        break;

      case 'MODEL_UPDATE_PARTICIPANT':
        {
          let participantInfo = event.payload;
          let wish = this._findWish(participantInfo.wishId);
          let participant = this._findParticipant(participantInfo.wishId, participantInfo.id);
          participant.name = participantInfo.name;
          participant.amount = participantInfo.amount;
          this._calculateWishSum(wish);
          this.save();
        }
        break;
    }
  }

  // ### HELPER FUNCTIONS ###

  private save() {
    let wishlistStr = JSON.stringify(this.root.wishlist);
    this.backend.saveWishlist(wishlistStr).then((event) => {
      this.root.wishlist = event.payload;
    });
  }

  private _findWish(wishId: string) {
    return this.root.wishlist.wishes.find((wish) => wish.id === wishId);
  }

  private _findParticipant(wishId: string, participantId: string) {
    let wish = this.root.wishlist.wishes.find((wish) => wish.id === wishId);
    if (wish) {
      return wish.participants.find((participant) => participant.id === participantId);
    }
    return null;
  }

  private _calculateWishlistSum() {
    let newSum = 0;
    this.root.wishlist.wishes.forEach((wish) => {
      newSum += wish.value;
    })
    this.root.wishlist.sum = newSum;
  }

  private _calculateWishSum(wish) {
    let newSum = 0;
    wish.participants.forEach((participant) => {
      newSum += participant.amount;
    })
    wish.currentValue = newSum;
  }
}
