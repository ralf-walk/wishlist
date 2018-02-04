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

  wishlist: Wishlist = null;

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

  createWishlist(title: string): Wishlist {
    return new Wishlist(this, title);
  }

  loadWishlist(id: string) {
    let json = {
      title: 'Geburtstag',
      wishes: [
        {
          title: 'Barby',
          description: 'Eine Barby von etwa 20cm Größe.',
          image: './assets/img/Baby.jpeg',
          value: 23,
          participants: []
        },
        {
          title: 'Playmobil',
          description: 'Mit Ställen, Geräteraum sowie einem Wohnbereich für die Bauersfamilie. Mit dem Lastenaufzug werden Vorräte auf den Speicher transportiert. Die Melkmaschine ist fahrbar und die Äpfel können vom Baum gepflückt werden.',
          image: './assets/img/Bauernhof.jpeg',
          value: 99,
          participants: [
            {
              name: 'Hans',
              amount: 12
            },
            {
              name: 'Maria',
              amount: 34
            }
          ]
        }
      ]
    }

    // parse json
    let wishlist = new Wishlist(this, json.title);
    json.wishes.forEach((w) => {
      let wish: Wish = new Wish(this, w.title, w.description, w.image, w.value)
      wishlist.addWish(wish);
      w.participants.forEach((p) => {
        wish.addParticipant(new Participant(this, p.name, p.amount));
      })
    });

    this.wishlist = wishlist;

    //this.wishlist = wishlist;
    this.observer.next({
      type: 'WISHLIST_UPDATE',
      payload: this.wishlist
    })
  }

  createWish(title: string, description: string, image: string, value: number): Wish {
    return new Wish(this, title, description, image, value);
  }

  createParticipant(name: string, amount: number): Participant {
    return new Participant(this, name, amount);
  }

  setWishlist(wishlist: Wishlist) {
    this.wishlist = wishlist;
    this.observer.next({
      type: 'WISHLIST_UPDATE',
      payload: this.wishlist
    })
  }
}
