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
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

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

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  onSubmit() {
    const formModel = R.clone(this.addWishForm.value);
    const url = formModel.url;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');

    const key = environment.linkpreview.key;
    const grabUrl = 'key=' + key + '&q=' + url;
    this.http.post('https://api.linkpreview.net', grabUrl, {headers: headers}).subscribe((ogData) => {

      const formModel = R.clone(this.addWishForm.value);

      const w = {
        url: url,
        value: formModel.value,
        title: ogData['title'],
        description: ogData['description'],
        image: ogData['image']
      };

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
