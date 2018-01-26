import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Wishlist } from '../models/wishlist.model';
import { Wish } from '../models/wish.model';
import { ModelService } from '../models/model.service';
import { Observable } from 'rxjs'
import { UxEventService, UxEvent } from '../services/ux.event.service'

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  @Input()
  wishlist: Wishlist;

  editingWishlist = false;
  creatingWish = false;

  constructor(private modalService: NgbModal, private modelService: ModelService, private uxEventService: UxEventService) {
  }

  ngOnInit() {
    this.uxEventService.observe().subscribe((uxEvent: UxEvent) => {
      if (uxEvent.type === "UX_EVENT_WISHLIST_START_EDIT" && uxEvent.payload === this) {
        this.editingWishlist = true;
      } else {
        this.editingWishlist = false;
      }
      if (uxEvent.type === "UX_EVENT_WISH_START_CREATE" && uxEvent.payload === this) {
        this.creatingWish = true;
      } else {
        this.creatingWish = false;
      }
    })
  }

  deleteWishlist() {
    this.modelService.deleteWishlist();
  }

  modifyWishlist(editedWishlist) {
    if (editedWishlist) {
      this.wishlist.title = editedWishlist.title;
      this.wishlist.maxSum = editedWishlist.maxSum;
    }
    this.uxEventService.fireEvent({ type: 'UX_EVENT_WISHLIST_STOP_EDIT', payload: this });
  }

  editWishlist() {
    this.uxEventService.fireEvent({ type: 'UX_EVENT_WISHLIST_START_EDIT', payload: this });
  }


  createWish(newWish) {
    if (newWish) {
      let wish = this.modelService.createWish(newWish.title, newWish.descriptions, newWish.value);
      this.wishlist.addWish(wish);
    }
    this.uxEventService.fireEvent({ type: 'UX_EVENT_WISH_STOP_CREATE', payload: this });
  }

  createNewWish() {
    this.uxEventService.fireEvent({ type: 'UX_EVENT_WISH_START_CREATE', payload: this });
  }
}
