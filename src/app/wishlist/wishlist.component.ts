import { Component, Input, ChangeDetectionStrategy, OnInit, ViewChild } from '@angular/core';
import { Wishlist } from '../models/wishlist.model';
import { Wish } from '../models/wish.model';
import { ModelService } from '../models/model.service';
import { Observable } from 'rxjs'

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistComponent implements OnInit {

  @Input()
  wishlist: Wishlist;

  editingWishlist = false;
  creatingWish = false;

  constructor(private modalService: NgbModal, private modelService: ModelService) {
  }

  ngOnInit() {
  }

  deleteWishlist() {
    this.modelService.deleteWishlist(this.wishlist);
  }

  modifyWishlist(editedWishlist) {
    if (editedWishlist) {
      this.wishlist.title = editedWishlist.title;
      this.wishlist.maxSum = editedWishlist.maxSum;
    }
    this.editingWishlist = false;
  }

  editWishlist() {
    this.editingWishlist = true;
  }


  createWish(newWish) {
    if (newWish) {
      let wish = this.modelService.createWish(newWish.title, newWish.descriptions, newWish.value);
      this.wishlist.addWish(wish);
    }
    this.creatingWish = false;
  }

  createNewWish() {
    this.creatingWish = true;
  }
}
