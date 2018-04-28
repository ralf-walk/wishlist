import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {WishlistService} from './services/wishlist.service';
import {PlatformLocation} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  root;
  private subscription: Subscription;

  constructor(private wishlistService: WishlistService, private platformLocation: PlatformLocation) {
  }

  ngOnInit() {
    this.root = this.wishlistService.getRoot();

    // try to load a wishlist
    const path = (this.platformLocation as any).location.pathname.substring(1);
    if (path) {
      this.wishlistService.fireEvent({type: 'MODEL_LOAD_WISHLIST', payload: {id: path}});
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createWishlist(wishlistInfo) {
    if (wishlistInfo) {
      this.wishlistService.fireEvent({type: 'MODEL_CREATE_WISHLIST', payload: wishlistInfo});
    }
  }
}
