import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {WishlistService} from './services/wishlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  root;
  private subscription: Subscription;

  constructor(private wishlistService: WishlistService) {
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
      this.wishlistService.fireEvent({type: 'MODEL_CREATE_WISHLIST', payload: wishlistInfo});
    }
  }
}
