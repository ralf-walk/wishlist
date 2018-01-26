import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { WishlistComponent } from './wishlist/wishlist.component'
import { Wishlist } from './models/wishlist.model'
import { NgRedux, select, select$ } from '@angular-redux/store';
import { Observable, Subscription } from 'rxjs'
import { ModelService, Event } from './models/model.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  wishlist: Wishlist;
  private subscription: Subscription;

  newWishlist = false;

  constructor(private modelService: ModelService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = this.modelService.observe().subscribe((event: Event) => {
      if (event.type == 'WISHLIST_UPDATE') {
        this.wishlist = event.payload;
      }
    });
    this.modelService.updateWishlists();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  createNewWishlist() {
    this.newWishlist = true;
  }

  createWishlist(newWishlist) {
    if (newWishlist) {
      let wishlist = this.modelService.createWishlist(newWishlist.title, newWishlist.maxSum);
      this.modelService.setWishlist(wishlist);
    }
    this.newWishlist = false;
  }
}
