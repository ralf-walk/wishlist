import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Wishlist} from '../models/wishlist.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  demoWishlist =
    {
      id: 'demo',
      title: 'Geburtstag',
      password: null,
      sum: 0,
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

  private wishlistSubject: BehaviorSubject<Wishlist> = new BehaviorSubject(null);
  private wishlistDoc: AngularFirestoreDocument<Wishlist>;

  constructor(private afs: AngularFirestore) {
  }

  public wishlistObs(): Observable<Wishlist> {
    return this.wishlistSubject;
  }

  public loadWishlist(wishlistId: string) {
    if (wishlistId === 'demo') {
      this.wishlistSubject.next(this.demoWishlist);
    } else {
      this.wishlistDoc = this.afs.collection('wishlists').doc(wishlistId);
      this.wishlistDoc.valueChanges().subscribe(this.wishlistSubject);
    }
  }

  public saveWishlist(wishlist: Wishlist) {
    if (wishlist.id !== 'demo') {
      this.wishlistDoc.set(wishlist);
    }
  }

  /*  public saveWishlist(incWishlistString): Promise<Event> {
      return new Promise<Event>((resolve, reject) => {
        const incWishlistJson = JSON.parse(incWishlistString);

        const wishlist = this._getWishlist(incWishlistJson.id);

        if (wishlist) {

          const pw = wishlist.password === incWishlistJson.password;
          if (pw) {
            // replace wishlist, set ids for unknown wishes
            wishlist.title = incWishlistJson.title;

            incWishlistJson.wishes.forEach((newWish) => {
              if (!newWish.id) {
                newWish.id = Math.random().toString(36).substring(7);
              }
            });

            wishlist.wishes = incWishlistJson.wishes;
            return resolve({type: 'OK', payload: wishlist});
          } else {
            // update just matching participants
            wishlist.wishes.forEach((wish) => {
              const newWish = incWishlistJson.wishes.find((newWish) => wish.id === newWish.id);
              if (newWish) {
                wish.participants = newWish.participants;
              }
            });

            return resolve({type: 'OK', payload: wishlist});
          }
        }
        return resolve({type: 'NOT_FOUND', payload: null});
      });
    }*/

  public createWishlist(title: string) {

    const id = Math.random().toString(36).substring(7);
    const password = Math.random().toString(36).substring(7);

    this.wishlistDoc = this.afs.collection('wishlists').doc(id);
    this.wishlistDoc.valueChanges().subscribe(this.wishlistSubject);
    this.wishlistDoc.set({
      id: id,
      password: password,
      title: title,
      sum: 0,
      wishes: null
    });
  }
}
