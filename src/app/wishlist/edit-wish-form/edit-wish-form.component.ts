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
import {WishlistService} from "../../services/wishlist.service";

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

  currentUpload: Upload;
  uploadPercent: Observable<number>;
  imgUrl: string;
  imgUrlData: string;

  constructor(private fb: FormBuilder,
              private uploadService: UploadService,
              private wishlistService: WishlistService) {
    this.uploadPercent = uploadService.uploadPercent;
  }

  uploadFile(event) {
    const selectedFile: File = event.target.files.item(0);
    const wishlistId = this.wishlistService.id;
    const wishId = this.wish.id;

    // upload file
    this.currentUpload = new Upload(selectedFile);
    this.uploadService
      .pushUpload(this.currentUpload, wishlistId, wishId)
      .subscribe((url) => {
        this.imgUrl = url;
        this.imgUrlData = null;
      });

    // show files data url as preview
    const fr = new FileReader();
    fr.onloadend = (event) => {
      this.imgUrlData = event.target['result'];
      this.imgUrl = null;
    };
    fr.readAsDataURL(selectedFile);
  }

  deleteFile() {
    this.imgUrl = null;
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
