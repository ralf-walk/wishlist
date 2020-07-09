import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Wish} from '../../models/wish.model';
import {Participant} from '../../models/participant.model';
import {WishlistService} from '../../services/wishlist.service';
import {EditService} from '../../services/edit.service';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  @Input()
  wish: Wish;

  @Input()
  adminAccount: boolean;

  @ViewChild('editWishTitleInput', {static: false})
  editWishTitleInput: ElementRef;

  @ViewChild('modal', {static: false})
  modal: ElementRef;

  newParticipant: Participant;

  constructor(private modalService: NgbModal,
              private wishlistService: WishlistService,
              public editService: EditService) {
  }

  ngOnInit() {
  }

  getPercent() {
    return Math.round((this.wish.currentValue / this.wish.value) * 100);
  }

  isGiven() {
    return this.wish.value === this.wish.currentValue;
  }

  deleteWish() {
    this.wishlistService.modelDeleteWish({id: this.wish.id});
  }

  modifyWish(wishInfo) {
    if (wishInfo) {
      wishInfo.id = this.wish.id;
      this.wishlistService.modelUpdateWish(wishInfo);
    }
    this.editService.stopEditing();
  }

  editWish() {
    this.editService.startEditing(this.wish);
  }

  onEditParticipant(participant) {
    this.editService.startEditing(participant);
  }

  editParticipant(participantInfo) {
    if (participantInfo) {
      participantInfo.wishId = this.wish.id;
      this.wishlistService.modelUpdateParticipant(participantInfo);
    }
    this.editService.stopEditing();
  }

  deleteParticipant(participant) {
    this.wishlistService.modelDeleteParticipant({wishId: this.wish.id, id: participant.id});
  }

  createParticipant(participantInfo) {
    if (participantInfo) {
      participantInfo.wishId = this.wish.id;
      this.wishlistService.modelAddParticipant(participantInfo);
      this.modalService.open(this.modal, { centered: true });
    }
    this.newParticipant = null;
    this.editService.stopEditing();
  }

  createNewParticipant() {
    const participant = new Participant();
    participant.amount = this.wish.value - this.wish.currentValue;
    this.editService.startEditing(participant);
    this.newParticipant = participant;
  }

  getMaxValue(participant: Participant) {
    const currentAmount = participant ? participant.amount : 0;
    return (this.wish.value - this.wish.currentValue) + currentAmount;
  }
}
