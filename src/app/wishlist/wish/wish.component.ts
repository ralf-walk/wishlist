import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Wish } from '../../models/wish.model';
import { Donor } from '../../models/donor.model';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishComponent {

  @Input()
  wish: Wish;

  constructor(private modalService: NgbModal) {
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
}
