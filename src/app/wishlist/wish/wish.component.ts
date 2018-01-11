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

  editedWish = null;

  @ViewChild("editWishTitleInput")
  editWishTitleInput: ElementRef;


  constructor(private modalService: NgbModal, private cdr: ChangeDetectorRef) {
  }

  deleteWish() {
    this.wish.remove();
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  editWish() {
    this.editedWish = {
      title: this.wish.title,
      description: this.wish.description,
      value: this.wish.value
    };
    this.cdr.detectChanges();
    this.editWishTitleInput.nativeElement.focus();
  }

  cancelEditWish() {
    this.editedWish = null;
  }

  onSubmit() {
    this.wish.title = this.editedWish.title;
    this.wish.description = this.editedWish.description;
    this.wish.value = this.editedWish.value;
    this.editedWish = null;
  }
}
