import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Wishlist} from '../../models/wishlist.model';

@Component({
  selector: 'app-add-wishlist-form',
  templateUrl: './add-wishlist-form.component.html',
  styleUrls: ['./add-wishlist-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWishlistFormComponent implements OnInit, AfterViewInit {

  @Input()
  readonly wishlist: Wishlist;

  @Output()
  modifiedWishlist = new EventEmitter();

  @ViewChild('formWishlistTitleInput')
  formWishlistTitleInput: ElementRef;

  formWishlist = {
    title: null,
  };
  submitted = false;

  constructor() {
  }

  onSubmit() {
    this.modifiedWishlist.emit(this.formWishlist);
  }

  ngOnInit() {
    if (this.wishlist) {
      this.formWishlist.title = this.wishlist.title;
    } else {
      this.formWishlist = {
        title: null,
      };
    }
  }

  ngAfterViewInit() {
    this.formWishlistTitleInput.nativeElement.focus();
  }

  cancelFormWishlist() {
    this.modifiedWishlist.emit(null);
  }
}
