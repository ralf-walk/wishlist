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
import {Wish} from '../../models/wish.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as R from 'ramda';

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWishFormComponent implements OnInit, AfterViewInit {

  @Input()
  readonly wish: Wish;

  @Output()
  modifiedWish = new EventEmitter();

  @ViewChild('formWishUrlInput', { static: false })
  formWishUrlInput: ElementRef;

  addWishForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    const formModel = R.clone(this.addWishForm.value);
    const w = {
      id: null,
      image: null,
      url: formModel.url,
      value: formModel.value,
      title: formModel.title,
      description: formModel.description
    };
    if (this.wish) {
      w.id = this.wish.id;
      w.image = this.wish.image;
    }
    this.modifiedWish.emit(w);
  }

  ngOnInit() {
    if (this.wish) {
      this.addWishForm = this.fb.group({
        url: [this.wish.url, Validators.required],
        value: [this.wish.value, Validators.required],
        title: [this.wish.title],
        description: [this.wish.description]
      });
    } else {
      this.addWishForm = this.fb.group({
        url: ['', Validators.required],
        value: [null, Validators.required],
        title: [''],
        description: ['']
      });
    }
  }

  ngAfterViewInit() {
    this.formWishUrlInput.nativeElement.focus();
  }

  cancelFormWish() {
    this.modifiedWish.emit(null);
  }
}
