import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { WishlistComponent } from './wishlist/wishlist.component'
import { Wishlist } from './models/wishlist.model'
import { NgRedux, select, select$ } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs'
import { WishlistService, Event } from './services/wishlist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit, OnDestroy {

  wishlist: Wishlist;
  private subscription: Subscription;

  constructor(private wishlistService: WishlistService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = this.wishlistService.observe().subscribe((event: Event) => {
      if (event.type == 'WISHLIST_UPDATE') {
        this.wishlist = event.payload;
      }
    });
    // check path parameters and
    //this.wishlistService.loadWishlist();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createWishlist(newWishlist) {
    if (newWishlist) {
      this.wishlistService.createWishlist(newWishlist.title);
    }
  }
}
