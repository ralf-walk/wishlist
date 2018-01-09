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

  wishlists: Wishlist[];
  private subscription: Subscription;

  newWishlist = null;
  
  @ViewChild("newWishlistTitleInput")
  newWishlistTitleInput: ElementRef;

  constructor(private modelService: ModelService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscription = this.modelService.observe().subscribe((event: Event) => {
      if (event.type == 'WISHLIST_UPDATE') {
        this.wishlists = event.payload;
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
    this.newWishlist = {
      title: null,
      maxSum: null,
    };
    this.cdr.detectChanges();
    this.newWishlistTitleInput.nativeElement.focus();
  }

  onSubmit() {
    let wishlist = this.modelService.createWishlist(this.newWishlist.title, this.newWishlist.maxSum);
    this.modelService.addWishlist(wishlist);
    this.newWishlist = null;
  }

  cancelNewWishlist() {
    this.newWishlist = null;
  }
}
