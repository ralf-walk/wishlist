import { Component, OnInit, OnDestroy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Wish } from '../../models/wish.model'
import { Wishlist } from '../../models/wishlist.model'
import { NgRedux } from '@angular-redux/store';
import { ModelService } from '../../models/model.service'

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWishFormComponent implements OnInit, OnDestroy {

  @Input()
  wish: Wish;

  @Input()
  close;

  @Input()
  dismiss;

  @Output()
  modifiedWish = new EventEmitter();

  formWish = {
    title: null,
    description: null,
    value: 0
  };

  constructor(private modelService: ModelService) {
  }

  submitted = false;

  onSubmit() {
    Object.assign(this.wish, this.formWish);
    this.modifiedWish.emit(this.wish);
    this.close();
  }

  ngOnInit() {
    this.formWish.value = this.wish.value;
    this.formWish.description = this.wish.description;
    this.formWish.title = this.wish.title;
  }

  ngOnDestroy() {
  }
}
