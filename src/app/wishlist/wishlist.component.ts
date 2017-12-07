import { Component, Input } from '@angular/core';
import { Wishlist } from '../models/wishlist.model';
import { Wish } from '../models/wish.model';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  @Input()
  wishlist: Wishlist;

  constructor(private modalService: NgbModal) {
  }

  public addWish(title) {
    this.wishlist.addWish(new Wish(title, null, 500));
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
