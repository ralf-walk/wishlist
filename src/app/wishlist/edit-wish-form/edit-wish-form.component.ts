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
import {Upload} from "../../models/upload";
import {UploadService} from "../../services/upload-service";
import {Observable} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-edit-wish-form',
  templateUrl: './edit-wish-form.component.html',
  styleUrls: ['./edit-wish-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditWishForm implements OnInit, AfterViewInit {

  @Input()
  readonly wish: Wish;

  @Output()
  modifiedWish = new EventEmitter();

  @ViewChild('formWishUrlInput', {static: false})
  formWishUrlInput: ElementRef;

  addWishForm: FormGroup;

  selectedFile: File;
  currentUpload: Upload;
  uploadPercent: Observable<number>;
  imgUrl: string;

  constructor(private fb: FormBuilder, private uploadService: UploadService, private sanitizer: DomSanitizer) {
    this.uploadPercent = uploadService.uploadPercent;
  }

  uploadSingle() {
    this.currentUpload = new Upload(this.selectedFile);
    this.uploadService.pushUpload(this.currentUpload, this.wish);
  }

  detectFiles(event) {
    this.selectedFile = event.target.files.item(0);
    const fr = new FileReader();

    fr.onloadend = (event) => {
      this.imgUrl = event.target['result'];
    };
    fr.readAsDataURL(this.selectedFile);
  }

  onSubmit() {
    const formModel = R.clone(this.addWishForm.value);

    const w = {
      id: null,
      image: this.imgUrl,
      url: formModel.url,
      value: formModel.value,
      title: formModel.title,
      description: formModel.description
    };
    if (this.wish) {
      w.id = this.wish.id;
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
      this.imgUrl = this.wish.image;
    } else {
      this.addWishForm = this.fb.group({
        url: ['', Validators.required],
        value: [null, Validators.required],
        title: [''],
        description: ['']
      });
      this.imgUrl = null;
    }
  }

  ngAfterViewInit() {
    this.formWishUrlInput.nativeElement.focus();
  }

  cancelFormWish() {
    this.modifiedWish.emit(null);
  }
}
