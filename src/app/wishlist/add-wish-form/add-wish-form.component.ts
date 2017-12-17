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
  wish: Wish

  @Input()
  close;

  @Input()
  dismiss;

  @Output()
  modifiedWish = new EventEmitter();

  constructor(private modelService: ModelService) {
  }

  submitted = false;

  onSubmit() {
    this.modifiedWish.emit(this.wish);
    this.close();
  }

  ngOnInit() {
    if (!this.wish) {
      this.wish = this.modelService.createWish(null, null, null);
    }
  }

  ngOnDestroy() {
  }
}
