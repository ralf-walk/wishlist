import {Wish} from './wish.model'

export class Wishlist {

  id: string;
  title: string;
  wishes: Wish[] = [];
  sum = 0;
}
