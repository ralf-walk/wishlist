import {Component, OnInit} from '@angular/core';
import {WishlistService} from '../services/wishlist.service';
import {UxEvent, UxEventService} from '../services/ux.event.service';
import {PlatformLocation} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  root;

  editingWishlist = false;
  creatingWish = false;

  constructor(private wishlistService: WishlistService,
              private uxEventService: UxEventService,
              private router: Router,
              private platformLocation: PlatformLocation) {
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

    this.wishlistService.loadWishlist(id, password);

    this.uxEventService.observe().subscribe((uxEvent: UxEvent) => {
      if (uxEvent.type === 'UX_EVENT_WISHLIST_START_EDIT' && uxEvent.payload === this) {
        this.editingWishlist = true;
      } else {
        this.editingWishlist = false;
      }
      if (uxEvent.type === 'UX_EVENT_WISH_START_CREATE' && uxEvent.payload === this) {
        this.creatingWish = true;
      } else {
        this.creatingWish = false;
      }
    });
    /*    if (this.wishlist.wishes.length == 0) {
          this.createNewWish();
        }*/
  }

  isAdmin() {
    return this.wishlistService.isAdminUser();
  }

  modifyWishlist(editedWishlist) {
    if (editedWishlist) {
      // TODO
      // this.wishlist.title = editedWishlist.title;
    }
    this.uxEventService.fireEvent({type: 'UX_EVENT_WISHLIST_STOP_EDIT', payload: this});
  }

  editWishlist() {
    this.uxEventService.fireEvent({type: 'UX_EVENT_WISHLIST_START_EDIT', payload: this});
  }

  createWish(wishInfo) {
    if (wishInfo) {
      this.wishlistService.modelAddWish(wishInfo);
    }
    this.uxEventService.fireEvent({type: 'UX_EVENT_WISH_STOP_CREATE', payload: this});
  }

  createNewWish() {
    this.uxEventService.fireEvent({type: 'UX_EVENT_WISH_START_CREATE', payload: this});
  }

  showLinks() {
    this.router.navigate(['share']);
  }
}
