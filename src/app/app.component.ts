import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {WishlistService} from './services/wishlist.service';
import {PlatformLocation} from "@angular/common";
import {UxEvent, UxEventService} from "./services/ux.event.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  root;
  private subscription: Subscription;

  protected showLinks = false;

  constructor(private wishlistService: WishlistService,
              private platformLocation: PlatformLocation,
              private uxEventService: UxEventService) {
  }

  ngOnInit() {
    this.root = this.wishlistService.getRoot();

    // try to load a wishlist
    const path = (this.platformLocation as any).location.pathname.substring(1);
    if (path) {
      this.wishlistService.fireEvent({type: 'MODEL_LOAD_WISHLIST', payload: {id: path}});
    }

    // handle ux events
    this.uxEventService.observe().subscribe((uxEvent: UxEvent) => {
      if (uxEvent.type === 'UX_EVENT_SHOW_LINKS') {
        console.log('SHOW_LINKSS');
        this.showLinks = true;
      }
      if (uxEvent.type === 'UX_EVENT_HIDE_LINKS') {
        this.showLinks = false;
      }
    });
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
