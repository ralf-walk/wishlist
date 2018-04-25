import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Wishlist} from '../models/wishlist.model';
import {Subject} from "rxjs/Subject";

// TODO this is the BACKEND, accessible over REST Calls
@Injectable()
export class DatabaseService {

  datastore = [
    {
      id: 'placeholder',
      title: 'Geburtstag',
      password: null,
      wishes: [
        {
          id: 'as3f',
          title: 'Barby',
          description: 'Eine Barby von etwa 20cm Größe.',
          image: './assets/img/Baby.jpeg',
          value: 23,
          currentValue: 0,
          participants: []
        },
        {
          id: 'vds5',
          title: 'Playmobil',
          description: 'Mit Ställen, Geräteraum sowie einem Wohnbereich für die Bauersfamilie. Mit dem Lastenaufzug werden Vorräte auf den Speicher transportiert. Die Melkmaschine ist fahrbar und die Äpfel können vom Baum gepflückt werden.',
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
    }
  ];

  wishlist: Subject<Wishlist> = new Subject();

  constructor(private afs: AngularFirestore) {
  }


  public loadWishlist(wishlistId: string, wishlistPassword: string): Promise<Event> {
    return new Promise<Event>((resolve, reject) => {
      const wishlist = this._getWishlist(wishlistId);

      if (wishlist) {
        const result = JSON.parse(JSON.stringify(wishlist));
        if (wishlistPassword !== result.password) {
          result.password = null;
        }
        resolve({type: 'OK', payload: result});
      }
      resolve({type: 'NOT_FOUND', payload: null});
    });
  }

  public saveWishlist(incWishlistString): Promise<Event> {
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
  }

  public createWishlist(title: string) {
    /*
          const id = Math.random().toString(36).substring(7);
          const password = Math.random().toString(36).substring(7);

          // create wishlist with some dummy entries to play around
          const wishlist = Object.assign({}, this._getWishlist('placeholder'));
          wishlist.id = id;
          wishlist.password = password;
          wishlist.title = title;


          this.datastore.push(wishlist);
    */

    const wishlistDoc: AngularFirestoreDocument<Wishlist> = this.afs.doc<Wishlist>('wishlists/demo');
    wishlistDoc.valueChanges().subscribe(this.wishlist);
  }

  private _getWishlist(wishlistId) {
    const wishlistArr = this.datastore.filter((entry) => entry.id === wishlistId);
    return wishlistArr ? wishlistArr[0] : null;
  }
}

interface Event {
  type: string;
  payload: any;
}
