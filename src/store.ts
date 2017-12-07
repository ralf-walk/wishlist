import { Action } from 'redux';
import { Wish } from './app/models/wish.model'
import { Wishlist } from './app/models/wishlist.model'

export enum WishlistActionType {
  SET_CURRENT_WISHLIST,
  SET_CURRENT_WISH,
  SET_WISHLIST
}

export interface WishlistAction {
  type: WishlistActionType
  payload: any
}

export interface IAppState {

  currentWishlist: Wishlist;
  currentWish: Wish;
  wishlists: Wishlist[];
}

export const INITIAL_STATE: IAppState = {
  currentWishlist: null,
  currentWish: null,
  wishlists: null
};

export function rootReducer(lastState: IAppState = INITIAL_STATE, action: WishlistAction): IAppState {
  switch (action.type) {
    case WishlistActionType.SET_WISHLIST:
      // always return new immutable object, else redux wont fire
      return {
        currentWishlist: lastState.currentWishlist,
        currentWish: lastState.currentWish,
        wishlists: action.payload
      }
  }

  return lastState;
}