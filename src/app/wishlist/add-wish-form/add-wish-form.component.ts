import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as R from 'ramda';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";
import {EMPTY} from "rxjs";

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWishFormComponent implements OnInit, AfterViewInit {

  @Output()
  modifiedWish = new EventEmitter();

  @ViewChild('formWishUrlInput', {static: false})
  formWishUrlInput: ElementRef;

  addWishForm: FormGroup;
  loadingWishInformation = false

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  onSubmit() {
    this.loadingWishInformation = true;
    const formModel = R.clone(this.addWishForm.value);
    const url = formModel.url;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');

    const key = environment.linkpreview.key;
    const grabUrl = 'key=' + key + '&q=' + encodeURIComponent(url);
    this.http.post('https://api.linkpreview.net', grabUrl, {headers: headers})
      .pipe(catchError((error: HttpErrorResponse) => {

        const formModel = R.clone(this.addWishForm.value);

        const w = {
          url: url,
          value: formModel.value,
        };

        this.loadingWishInformation = false;
        this.modifiedWish.emit(w);

        return EMPTY;
      }))
      .subscribe((ogData) => {

        const formModel = R.clone(this.addWishForm.value);

        const w = {
          url: url,
          value: formModel.value,
          title: ogData['title'],
          description: ogData['description'],
          image: ogData['image']
        };

        this.loadingWishInformation = false;
        this.modifiedWish.emit(w);
      });
  }

  ngOnInit() {
    this.addWishForm = this.fb.group({
      url: ['', Validators.required],
      value: [null, Validators.required],
    });
  }

  ngAfterViewInit() {
    this.formWishUrlInput.nativeElement.focus();
  }

  cancelFormWish() {
    this.modifiedWish.emit(null);
  }
}
