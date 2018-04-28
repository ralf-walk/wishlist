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

  @ViewChild('formWishTitleInput')
  formWishTitleInput: ElementRef;

  formWish = {
    id: null,
    title: null,
    image: null,
    description: null,
    value: 0
  };
  submitted = false;

  constructor() {
  }

  onSubmit() {
    this.modifiedWish.emit(this.formWish);
  }

  ngOnInit() {
    if (this.wish) {
      this.formWish.id = this.wish.id;
      this.formWish.value = this.wish.value;
      this.formWish.description = this.wish.description;
      this.formWish.image = this.wish.image;
      this.formWish.title = this.wish.title;
    } else {
      this.formWish = {
        id: null,
        title: null,
        image: null,
        description: null,
        value: 0
      };
    }
  }

  ngAfterViewInit() {
    this.formWishTitleInput.nativeElement.focus();
  }

  cancelFormWish() {
    this.modifiedWish.emit(null);
  }
}
