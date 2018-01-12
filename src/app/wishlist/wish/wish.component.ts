import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Wish } from '../../models/wish.model';
import { Donor } from '../../models/donor.model';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishComponent {

  @Input()
  wish: Wish;

  editingWish = false;

  @ViewChild("editWishTitleInput")
  editWishTitleInput: ElementRef;

  constructor(private modalService: NgbModal, private cdr: ChangeDetectorRef) {
  }

  deleteWish() {
    this.wish.remove();
  }

  modifyWish(editedWish) {
    if (editedWish) {
      this.wish.title = editedWish.title;
      this.wish.description = editedWish.description;
      this.wish.value = editedWish.value;
    }
    this.editingWish = false;
  }

  editWish() {
    this.editingWish = true;
  }
}
