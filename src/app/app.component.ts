import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { WishlistComponent } from './wishlist/wishlist.component'
import { Wishlist } from './models/wishlist.model'
import { Observable, Subscription } from 'rxjs'
import { WishlistService, Event } from './services/wishlist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  root
  private subscription: Subscription;

  constructor(private wishlistService: WishlistService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.root = this.wishlistService.getRoot();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createWishlist(wishlistInfo) {
    if (wishlistInfo) {
      this.wishlistService.fireEvent({ type: 'MODEL_CREATE_WISHLIST', payload: wishlistInfo});
    }
  }
}
