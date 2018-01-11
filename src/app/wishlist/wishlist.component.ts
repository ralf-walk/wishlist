import { Component, Input, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
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

  editedWishlist = null;

  @ViewChild("editWishlistTitleInput")
  editWishlistTitleInput: ElementRef;

  constructor(private modalService: NgbModal, private modelService: ModelService, private cdr: ChangeDetectorRef) {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit() {
  }

  addWish(wish: Wish) {
    this.wishlist.addWish(wish);
  }

  createNewWish(): Wish {
    return this.modelService.createWish(null, null, 0);
  }

  deleteWishlist() {
    this.modelService.deleteWishlist(this.wishlist);
  }

  editWishlist() {
    this.editedWishlist = {
      title: this.wishlist.title,
      maxSum: this.wishlist.maxSum
    };
    this.cdr.detectChanges();
    this.editWishlistTitleInput.nativeElement.focus();
  }

  cancelEditWishlist() {
    this.editedWishlist = null;
  }

  onSubmit() {
    this.wishlist.title = this.editedWishlist.title;
    this.wishlist.maxSum = this.editedWishlist.maxSum;
    this.editedWishlist = null;
  }
}
