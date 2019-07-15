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
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as R from 'ramda';

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

  @ViewChild('formWishlistTitleInput', { static: false })
  formWishlistTitleInput: ElementRef;

  wishlistForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    const formModel = R.clone(this.wishlistForm.value);

    const w = {
      title: formModel.title
    };
    this.modifiedWishlist.emit(w);
  }

  ngOnInit() {
    if (this.wishlist) {
      this.wishlistForm = this.fb.group({
        title: [this.wishlist.title, Validators.required]
      });
    } else {
      this.wishlistForm = this.fb.group({
        title: ['', Validators.required]
      });
    }
  }

  ngAfterViewInit() {
    this.formWishlistTitleInput.nativeElement.focus();
  }

  cancelFormWishlist() {
    this.modifiedWishlist.emit(null);
  }
}
