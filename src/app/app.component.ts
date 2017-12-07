import { Component, OnDestroy, OnInit } from '@angular/core';
import { WishlistComponent } from './wishlist/wishlist.component'
import { Wishlist } from './models/wishlist.model'
import { WishlistService } from './services/wishlist.service'
import { NgRedux } from '@angular-redux/store';
import { IAppState, WishlistActionType } from '../store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {

  wishlists: Wishlist[] = [];
  subscription;

  constructor(private wishlistService: WishlistService,
    private ngRedux: NgRedux<IAppState>) {

    this.subscription = ngRedux.select<Wishlist[]>('wishlists')
      .subscribe(wishlists => {
        this.wishlists = wishlists
      });
  }

  ngOnInit() {
    this.wishlistService.getWishlists().subscribe((ws: Wishlist[]) => {
      this.ngRedux.dispatch({ type: WishlistActionType.SET_WISHLIST, payload: ws });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
