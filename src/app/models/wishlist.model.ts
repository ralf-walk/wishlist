import {Wish} from './wish.model'
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export class Wishlist {

  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  title: string;
  wishes: Wish[] = [];
  sum = 0;
}
