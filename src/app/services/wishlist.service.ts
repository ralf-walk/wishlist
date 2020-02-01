import {Injectable} from '@angular/core';
import {Wish} from '../models/wish.model';
import {Wishlist} from '../models/wishlist.model';
import {Participant} from '../models/participant.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import * as R from 'ramda';

@Injectable()
export class WishlistService {

  demoWishlist =
    {
      id: 'demo',
      title: 'Geburtstag',
      password: 'pw',
      sum: 122,
      wishes: [
        {
          id: 'as3f',
          url: '',
          title: 'Barby',
          description: 'Eine Barby von etwa 20cm Größe.',
          image: './assets/img/Baby.jpeg',
          value: 23,
          currentValue: 0,
          participants: []
        },
        {
          id: 'vds5',
          url: '',
          title: 'Playmobil',
          description: 'Mit Ställen, Geräteraum sowie einem Wohnbereich für die Bauersfamilie.\ ' +
            'Mit dem Lastenaufzug werden Vorräte auf den Speicher transportiert. \D' +
            'ie Melkmaschine ist fahrbar und die Äpfel können vom Baum gepflückt werden.',
          image: './assets/img/Bauernhof.jpeg',
          value: 99,
          currentValue: 46,
          participants: [
            {
              id: 'dwfwe3242',
              name: 'Hans',
              amount: 12
            },
            {
              id: 'sdvvs8d',
              name: 'Maria',
              amount: 34
            }
          ]
        }
      ]
    };


  private privateWishlist: Wishlist;
  private publicWishlist: Wishlist = null;
  root = {
    adminAccount: false,
    wishlist: this.publicWishlist
  };

  private wishlistSubject: BehaviorSubject<Wishlist> = new BehaviorSubject(null);
  private wishlistDoc: AngularFirestoreDocument<Wishlist>;
  private _editMode: boolean;

  constructor(private http: HttpClient, private afs: AngularFirestore) {
    this.wishlistSubject.subscribe((wishlist) => {
      this.privateWishlist = wishlist;
      this.root.wishlist = wishlist;
    });
  }


  get editMode(): boolean {
    return this._editMode;
  }

  set editMode(value: boolean) {
    this._editMode = value;
  }

  getRoot() {
    return this.root;
  }

  getRootUpdates(): Observable<Wishlist> {
    return this.wishlistSubject;
  }

  createWishlist(wishlistInfo) {
    const title = wishlistInfo.title;
    const id = Math.random().toString(36).substring(7);

    this.wishlistDoc = this.afs.collection('wishlists').doc(id);
    this.wishlistDoc.valueChanges().subscribe(this.wishlistSubject);
    this.wishlistDoc.set({
      id: id,
      title: title,
      sum: 0,
      wishes: []
    });
    this.editMode = true;
  }

  loadWishlist(id: string) {
    if (id === 'demo') {
      this.save(this.demoWishlist);
    } else {
      this.wishlistDoc = this.afs.collection('wishlists').doc(id);
      this.wishlistDoc.valueChanges().subscribe(this.wishlistSubject);
    }
  }

  deleteWishlist() {
    if (this.editMode) {
      this.wishlistDoc.delete();
    }
  }

  modelAddWish(wishInfo) {
    const newWishlist = R.clone(this.privateWishlist);
    const wish: Wish = {
      id: Math.random().toString(36).substring(7),
      url: wishInfo.url,
      title: wishInfo.title,
      description: wishInfo.description,
      image: wishInfo.image,
      value: wishInfo.value,
      currentValue: null,
      participants: []
    };

    newWishlist.wishes.push(wish);
    this._calculateWishlistSum(newWishlist);
    this.save(newWishlist);
  }

  modelDeleteWish(wishInfo) {
    const newWishlist = R.clone(this.privateWishlist);
    const wish = this._findWish(newWishlist, wishInfo.id);
    const index = newWishlist.wishes.indexOf(wish);
    if (index >= 0) {
      newWishlist.wishes.splice(index, 1);
      this._calculateWishlistSum(newWishlist);
    }
    this.save(newWishlist);
  }

  modelUpdateWish(wishInfo) {
    const newWishlist = R.clone(this.privateWishlist);
    const wish = this._findWish(newWishlist, wishInfo.id);
    if (wish) {
      wish.title = wishInfo.title;
      wish.description = wishInfo.description;
      wish.value = wishInfo.value;
      wish.image = wishInfo.image;
      this._calculateWishlistSum(newWishlist);
    }
    this.save(newWishlist);
  }


  modelAddParticipant(participantInfo) {
    const newWishlist = R.clone(this.privateWishlist);
    const wish = this._findWish(newWishlist, participantInfo.wishId);
    const participant: Participant = {
      id: Math.random().toString(36).substring(7),
      name: participantInfo.name,
      amount: participantInfo.amount
    };
    wish.participants.push(participant);
    this._calculateWishSum(wish);
    this.save(newWishlist);
  }

  modelDeleteParticipant(participantInfo) {
    const newWishlist = R.clone(this.privateWishlist);
    const wish = this._findWish(newWishlist, participantInfo.wishId);
    const participant = this._findParticipant(newWishlist, participantInfo.wishId, participantInfo.id);
    const index = wish.participants.indexOf(participant);
    if (index >= 0) {
      wish.participants.splice(index, 1);
      this._calculateWishSum(wish);
    }
    this.save(newWishlist);
  }

  modelUpdateParticipant(participantInfo) {
    const newWishlist = R.clone(this.privateWishlist);
    const wish = this._findWish(newWishlist, participantInfo.wishId);
    const participant = this._findParticipant(newWishlist, participantInfo.wishId, participantInfo.id);
    participant.name = participantInfo.name;
    participant.amount = participantInfo.amount;
    this._calculateWishSum(wish);
    this.save(newWishlist);
  }

// ### FIRESTORE FUNCTION

  public wishlistObs(): Observable<Wishlist> {
    return this.wishlistSubject;
  }

  public save(wishlist: Wishlist, persist = true) {
    if (wishlist) {
      this.wishlistSubject.next(wishlist);
      if (persist && wishlist.id !== 'demo') {
        this.wishlistDoc.set(wishlist);
      }
    }
  }


  // ### HELPER FUNCTIONS ###


  private _findWish(wishlist: Wishlist, wishId: string) {
    return wishlist.wishes.find((wish) => wish.id === wishId);
  }

  private _findParticipant(wishlist: Wishlist, wishId: string, participantId: string) {
    const wish = wishlist.wishes.find((w) => w.id === wishId);
    if (wish) {
      return wish.participants.find((participant) => participant.id === participantId);
    }
    return null;
  }

  private _calculateWishlistSum(wishlist: Wishlist) {
    let newSum = 0;
    wishlist.wishes.forEach((wish) => {
      newSum += wish.value;
    });
    wishlist.sum = newSum;
  }

  private _calculateWishSum(wish) {
    let newSum = 0;
    wish.participants.forEach((participant) => {
      newSum += participant.amount;
    });
    wish.currentValue = newSum;
  }
}
