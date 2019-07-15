import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {WishlistService} from '../services/wishlist.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(private wishlistService: WishlistService, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.wishlistService.getRootUpdates().subscribe((wishlist) => {
      if (wishlist) {
        const path = wishlist.id + '-' + wishlist.password;
        this.router.navigate([path]);
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  createWishlist(wishlistInfo) {
    if (wishlistInfo) {
      this.wishlistService.createWishlist(wishlistInfo);
    }
  }
}
