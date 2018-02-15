import { Component, OnInit, OnDestroy, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Wish } from '../../models/wish.model'
import { Wishlist } from '../../models/wishlist.model'

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWishFormComponent implements OnInit, AfterViewInit {

  @Input()
  wish: Wish;

  @Output()
  modifiedWish = new EventEmitter();

  @ViewChild("formWishTitleInput")
  formWishTitleInput: ElementRef;

  formWish = {
    title: null,
    description: null,
    value: 0
  }

  constructor() {
  }

  submitted = false;

  onSubmit() {
    this.modifiedWish.emit(this.formWish);
  }

  ngOnInit() {
    if (this.wish) {
      this.formWish.value = this.wish.value;
      this.formWish.description = this.wish.description;
      this.formWish.title = this.wish.title;
    } else {
      this.formWish = {
        title: null,
        description: null,
        value: 0
      }
    }
  }

  ngAfterViewInit() {
    this.formWishTitleInput.nativeElement.focus();
  }

  cancelFormWish() {
    this.modifiedWish.emit(null);
  }
}
