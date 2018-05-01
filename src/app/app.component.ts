import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {WishlistService} from './services/wishlist.service';
import {PlatformLocation} from '@angular/common';
import {UxEvent, UxEventService} from './services/ux.event.service';

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

    let id = null;
    let password = null;

    if (path.length > 1) {
      if (path.indexOf('-') > 0) {
        const match = path.match(/(.*)-(.*)/);
        id = match[1];
        password = match[2];
      } else {
        id = path;
      }
    }

    if (id) {
      this.wishlistService.fireEvent({type: 'MODEL_LOAD_WISHLIST', payload: {id: id, password: password}});
    }

    // handle ux events
    this.uxEventService.observe().subscribe((uxEvent: UxEvent) => {
      if (uxEvent.type === 'UX_EVENT_SHOW_LINKS') {
        this.showLinks = true;
      }
      if (uxEvent.type === 'UX_EVENT_HIDE_LINKS') {
        this.showLinks = false;
      }
    });

    // handle back button events
    this.platformLocation.onPopState(() => {
      var r = confirm("You pressed a Back button! Are you sure?!");
      console.log('BACK CLICKED');
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
