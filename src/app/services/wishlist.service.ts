import {Injectable} from '@angular/core';
import {Wish} from '../models/wish.model';
import {Wishlist} from '../models/wishlist.model';
import {Participant} from '../models/participant.model';

import {DatabaseService} from './database.service';

export interface Event {
  type: string;
  payload: any;
}

@Injectable()
export class WishlistService {

  root = {
    adminAccount: false,
    wishlist: this._wishlist
  };

  private _wishlist: Wishlist = null;
  private password: String = null;

  constructor(private backend: DatabaseService) {
    this.root.wishlist = null;
    backend.wishlistObs().subscribe((wishlist) => {
      this.root.adminAccount = wishlist ? wishlist.password === this.password : null;
      this.root.wishlist = wishlist;
    });
  }

  getRoot() {
    return this.root;
  }

  // ### REDUCER ###
  fireEvent(event: Event) {

    switch (event.type) {

      case 'MODEL_CREATE_WISHLIST': {
        const wishlistInfo = event.payload;
        this.backend.createWishlist(wishlistInfo.title);
      }
        break;

      case 'MODEL_LOAD_WISHLIST': {
        const wishlistInfo = event.payload;
        this.password = wishlistInfo.password;
        this.backend.loadWishlist(wishlistInfo.id);
      }
        break;

      case 'MODEL_DELETE_WISHLIST': {
        this.root.wishlist = null;
        this.save();
      }
        break;

      case 'MODEL_ADD_WISH': {
        const wishInfo = event.payload;
        const wish: Wish = {
          id: Math.random().toString(36).substring(7),
          title: wishInfo.title,
          description: wishInfo.description,
          image: wishInfo.image,
          value: wishInfo.value,
          currentValue: null,
          participants: []
        };
        if (!this.root.wishlist.wishes) {
          this.root.wishlist.wishes = [];
        }
        this.root.wishlist.wishes.push(wish);
        this._calculateWishlistSum();
        this.save();
      }
        break;

      case 'MODEL_DELETE_WISH': {
        const wishInfo = event.payload;
        const wish = this._findWish(wishInfo.id);
        const index = this.root.wishlist.wishes.indexOf(wish);
        if (index >= 0) {
          this.root.wishlist.wishes.splice(index, 1);
          this._calculateWishlistSum();
        }
        this.save();
      }
        break;

      case 'MODEL_UPDATE_WISH': {
        const wishInfo = event.payload;
        const wish = this._findWish(wishInfo.id);
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

      case 'MODEL_ADD_PARTICIPANT': {
        const participantInfo = event.payload;
        const wish = this._findWish(participantInfo.wishId);
        const participant: Participant = {
          id: Math.random().toString(36).substring(7),
          name: participantInfo.name,
          amount: participantInfo.amount
        };
        wish.participants.push(participant);
        this._calculateWishSum(wish);
        this.save();
      }
        break;

      case 'MODEL_DELETE_PARTICIPANT': {
        const participantInfo = event.payload;
        const wish = this._findWish(participantInfo.wishId);
        const participant = this._findParticipant(participantInfo.wishId, participantInfo.id);
        const index = wish.participants.indexOf(participant);
        if (index >= 0) {
          wish.participants.splice(index, 1);
          this._calculateWishSum(wish);
        }
        this.save();
      }
        break;

      case 'MODEL_UPDATE_PARTICIPANT': {
        const participantInfo = event.payload;
        const wish = this._findWish(participantInfo.wishId);
        const participant = this._findParticipant(participantInfo.wishId, participantInfo.id);
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
    this.backend.saveWishlist(this.root.wishlist);
  }

  private _findWish(wishId: string) {
    return this.root.wishlist.wishes.find((wish) => wish.id === wishId);
  }

  private _findParticipant(wishId: string, participantId: string) {
    const wish = this.root.wishlist.wishes.find((w) => w.id === wishId);
    if (wish) {
      return wish.participants.find((participant) => participant.id === participantId);
    }
    return null;
  }

  private _calculateWishlistSum() {
    let newSum = 0;
    this.root.wishlist.wishes.forEach((wish) => {
      newSum += wish.value;
    });
    this.root.wishlist.sum = newSum;
  }

  private _calculateWishSum(wish) {
    let newSum = 0;
    wish.participants.forEach((participant) => {
      newSum += participant.amount;
    });
    wish.currentValue = newSum;
  }
}
