import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

  constructor(private modelService: ModelService) {
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
}
