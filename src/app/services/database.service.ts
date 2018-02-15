import { Observable, Observer, Subscription, ConnectableObservable } from 'rxjs'
import { Injectable } from '@angular/core';

// TODO this is the BACKEND, accessible over REST Calls
@Injectable()
export class DatabaseService {

    datastore = [
        {
            id: '123456',
            password: '98765',
            title: 'Geburtstag',
            wishes: [
                {
                    id: 'as3f',
                    title: 'Barby',
                    description: 'Eine Barby von etwa 20cm Größe.',
                    image: './assets/img/Baby.jpeg',
                    value: 23,
                    participants: []
                },
                {
                    id: 'vds5',
                    title: 'Playmobil',
                    description: 'Mit Ställen, Geräteraum sowie einem Wohnbereich für die Bauersfamilie. Mit dem Lastenaufzug werden Vorräte auf den Speicher transportiert. Die Melkmaschine ist fahrbar und die Äpfel können vom Baum gepflückt werden.',
                    image: './assets/img/Bauernhof.jpeg',
                    value: 99,
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


    public loadWishlist(wishlistId: string, wishlistPassword: string): Promise<Event> {
        return new Promise<Event>((resolve, reject) => {
            let wishlist = this._getWishlist(wishlistId);

            if (wishlist) {
                let result = JSON.parse(JSON.stringify(wishlist));
                if (wishlistPassword !== result.password) {
                    result.password = null;
                }
                resolve({ type: "OK", payload: result });
            }
            resolve({ type: "NOT_FOUND", payload: null });
        });
    }

    public saveWishlist(incWishlistString): Promise<Event> {
        return new Promise<Event>((resolve, reject) => {
            let incWishlistJson = JSON.parse(incWishlistString);

            let wishlist = this._getWishlist(incWishlistJson.id);

            if (wishlist) {

                let pw = wishlist.password === incWishlistJson.password;
                if (pw) {
                    // replace wishlist, set ids for unknown wishes
                    wishlist.title = incWishlistJson.title;

                    incWishlistJson.wishes.forEach((newWish) => {
                        if (!newWish.id) {
                            newWish.id = Math.random().toString(36).substring(7);
                        }
                    });

                    wishlist.wishes = incWishlistJson.wishes;
                    return resolve({ type: "OK", payload: wishlist });
                } else {
                    // update just matching participants
                    wishlist.wishes.forEach((wish) => {
                        let newWish = incWishlistJson.wishes.find((newWish) => wish.id === newWish.id);
                        if (newWish) {
                            wish.participants = newWish.participants;
                        }
                    });

                    return resolve({ type: "OK", payload: wishlist });
                }
            }
            return resolve({ type: "NOT_FOUND", payload: null });
        });
    }

    public createWishlist(title: string): Promise<Event> {
        return new Promise<Event>((resolve, reject) => {
            console.log("DATABASE_SERVICE createWishlist")
            let id = Math.random().toString(36).substring(7);
            let password = Math.random().toString(36).substring(7);
            let wishlist = {
                id: id,
                password: password,
                title: title, edit: null,
                wishes: []
            };
            this.datastore.push(wishlist);
            resolve({ type: "OK", payload: wishlist });
        });
    }

    // public updateWishlist(updatedWishlist) {
    //     return new Promise<Event>((resolve, reject) => {
    //         let wishlist = this._getWishlist();
    //         if (wishlist.password === updatedWishlist.password && updatedWishlist.edit) {
    //             // admin update
    //             wishlist.revision++;
    //             wishlist.title = updatedWishlist.title;
    //             updatedWishlist.wishes.forEach((updatedWish) => {

    //                 let wish = wishlist.wishes.find((wish) => wish.id === updatedWish.id);
    //                 if (!wish) {
    //                     // add a new wish
    //                     wishlist.wishes.push(updatedWish);
    //                 } else {
    //                     // update existing wish

    //                 }
    //             });
    //         }
    //     });
    // }

    // public createWish(title: string, description: string, image: string, value: number) {
    //     return new Promise<Event>((resolve, reject) => {

    //         let wishlist = this._getWishlist();
    //         if (wishlist) {
    //             let wish = {
    //                 id: Math.random().toString(36).substring(7),
    //                 title: title,
    //                 description: description,
    //                 image: image,
    //                 value: value,
    //                 participants: null
    //             }
    //             wishlist.wishes.push(wish);
    //             return resolve({ type: "OK", payload: wish });
    //         }
    //         return resolve({ type: "NOT_FOUND", payload: null });
    //     });
    // }

    // public createParticipant(wishId: string, name: string, amount: number): Promise<Event> {
    //     return new Promise<Event>((resolve, reject) => {

    //         let wish = this._getWish(wishId);
    //         if (wish) {

    //             let participant = {
    //                 id: Math.random().toString(36).substring(7),
    //                 name: name,
    //                 amount: amount
    //             }
    //             wish.participants.push(participant);
    //             return resolve({ type: "OK", payload: participant });
    //         };
    //         return resolve({ type: "NOT_FOUND", payload: null });
    //     })
    // }

    // UPDATE

    // public updateWishlist(updatedWishlist): Promise<Event> {
    //     return new Promise<Event>((resolve, reject) => {
    //         let wishlist = this._getWishlist();
    //         if (wishlist) {
    //             if (wishlist.password === updatedWishlist.password) {
    //                 wishlist.title = updatedWishlist.title;
    //                 return resolve({ type: "OK", payload: wishlist });
    //             }
    //             return resolve({ type: 'PASSWORD_ERROR', payload: null });
    //         }
    //         return resolve({ type: "NOT_FOUND", payload: null });
    //     });
    // }

    // public updateWish(updatedWish) {
    //     return new Promise<Event>((resolve, reject) => {

    //         let wishlist = this._getWishlist();
    //         if (wishlist) {
    //             if (wishlist.password === this.wishlistPassword) {
    //                 let wishArr = wishlist.wishes.filter((wish) => wish.id === updatedWish.id);
    //                 if (wishArr) {
    //                     let wish = wishArr[0];
    //                     wish.title = updatedWish.title;
    //                     wish.description = updatedWish.description;
    //                     wish.image = updatedWish.image;
    //                     wish.value = updatedWish.value;
    //                     return resolve({ type: "OK", payload: wish });
    //                 };
    //                 return resolve({ type: "NOT_FOUND", payload: null });
    //             };
    //             return resolve({ type: "PASSWORD_ERROR", payload: null });
    //         }
    //         return resolve({ type: "NOT_FOUND", payload: null });
    //     });
    // }

    // public updateParticipant(wishId: string, updatedParticipant): Promise<Event> {
    //     return new Promise<Event>((resolve, reject) => {

    //         let participant = this._getParticipant(wishId, updatedParticipant.id);
    //         if (participant) {
    //             participant.name = updatedParticipant.name;
    //             participant.amount = updatedParticipant.amount;
    //             return resolve({ type: "OK", payload: participant });
    //         };
    //         return resolve({ type: "NOT_FOUND", payload: null });
    //     })
    // }

    // HELPER FUNCTIONS

    private _getWishlist(wishlistId) {
        let wishlistArr = this.datastore.filter((entry) => entry.id === wishlistId);
        return wishlistArr ? wishlistArr[0] : null;
    }

    // private _getWish(wishId: string) {
    //     let wishlist = this._getWishlist();
    //     if (wishlist) {
    //         let wishArr = wishlist.wishes.filter((wish) => wish.id == wishId);
    //         return wishArr ? wishArr[0] : null;
    //     }
    // }
    // private _getParticipant(wishId: string, participantId: string) {
    //     let wish = this._getWish(wishId);
    //     if (wish) {
    //         let participantArr = wish.participants.filter((participant) => participant.id == participantId);
    //         return participantArr ? participantArr[0] : null;
    //     }
    // }
}

interface Event {
    type: string;
    payload: any;
}