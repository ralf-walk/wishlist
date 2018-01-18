import { Component, OnInit, OnDestroy, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Wish } from '../../models/wish.model'
import { Wishlist } from '../../models/wishlist.model'
import { NgRedux } from '@angular-redux/store';
import { ModelService } from '../../models/model.service'

@Component({
  selector: 'app-add-wishlist-form',
  templateUrl: './add-wishlist-form.component.html',
  styleUrls: ['./add-wishlist-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWishlistFormComponent implements OnInit, AfterViewInit {

  @Input()
  wishlist: Wishlist;

  @Output()
  modifiedWishlist = new EventEmitter();

  @ViewChild("formWishlistTitleInput")
  formWishlistTitleInput: ElementRef;

  formWishlist = {
    title: null,
    maxSum: 0
  }

  constructor() {
  }

  submitted = false;

  onSubmit() {
    this.modifiedWishlist.emit(this.formWishlist);
  }

  ngOnInit() {
    if (this.wishlist) {
      this.formWishlist.title = this.wishlist.title;
      this.formWishlist.maxSum = this.wishlist.maxSum;
    } else {
      this.formWishlist = {
        title: null,
        maxSum: 0
      }
    }
  }

  ngAfterViewInit() {
    this.formWishlistTitleInput.nativeElement.focus();
  }

  cancelFormWishlist() {
    this.modifiedWishlist.emit(null);
  }
}