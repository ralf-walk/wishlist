import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Wishlist } from '../models/wishlist.model';
import { Wish } from '../models/wish.model';
import { ModelService } from '../models/model.service';
import { Observable } from 'rxjs'

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistComponent implements OnInit {

  @Input()
  wishlist: Wishlist;

  wishes: Wish[];

  constructor(private modalService: NgbModal, private modelService: ModelService) {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit() {
    this.wishes = this.wishlist.getWishes();
  }

  addWish(wish: Wish) {
    this.wishlist.addWish(wish);
  }

  createNewWish(): Wish {
    return this.modelService.createWish(null, null, 0);
  }
}
