import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Wish } from '../../models/wish.model';
import { Participant } from '../../models/participant.model';
import { WishlistService } from '../../services/wishlist.service'
import { UxEventService, UxEvent } from '../../services/ux.event.service'

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  @Input()
  wish: Wish;

  editingWish = false;

  @ViewChild("editWishTitleInput")
  editWishTitleInput: ElementRef;

  creatingParticipant = false;

  editingParticipant: Participant = null;

  constructor(private modalService: NgbModal, private wishlistService: WishlistService, private uxEventService: UxEventService) {
  }

  ngOnInit() {
    this.uxEventService.observe().subscribe((uxEvent: UxEvent) => {
      if (uxEvent.type === "UX_EVENT_START_EDIT" && uxEvent.payload === this) {
        this.editingWish = true;
      } else {
        this.editingWish = false;
      }

      if (uxEvent.type === "UX_EVENT_PARTICIPANT_STOP_CREATE" && uxEvent.payload === this) {
        this.creatingParticipant = true;
      } else {
        this.creatingParticipant = false;
      }

      if (uxEvent.type === "UX_EVENT_PARTICIPANT_START_EDIT" && uxEvent.payload !== this) {
        this.editingParticipant = null;
      }
    })
  }

  getPercent() {
    return Math.round((this.wish.currentValue / this.wish.value) * 100);
  }

  isGiven() {
    return this.wish.value == this.wish.currentValue;
  }

  deleteWish() {
    this.wishlistService.fireEvent({ type: 'MODEL_DELETE_WISH', payload: { id: this.wish.id } })
  }

  modifyWish(wishInfo) {
    if (wishInfo) {
      wishInfo.id = this.wish.id;
      this.wishlistService.fireEvent({ type: 'MODEL_UPDATE_WISH', payload: wishInfo })
    }
    this.uxEventService.fireEvent({ type: 'UX_EVENT_STOP_EDIT', payload: this });
  }

  editWish() {
    this.uxEventService.fireEvent({ type: 'UX_EVENT_START_EDIT', payload: this });
  }

  createParticipant(participantInfo) {
    if (participantInfo) {
      participantInfo.wishId = this.wish.id;
      this.wishlistService.fireEvent({ type: 'MODEL_ADD_PARTICIPANT', payload: participantInfo })
    }
    this.uxEventService.fireEvent({ type: 'UX_EVENT_PARTICIPANT_START_CREATE', payload: this });
  }

  createNewParticipant() {
    this.uxEventService.fireEvent({ type: 'UX_EVENT_PARTICIPANT_STOP_CREATE', payload: this });
  }

  onEditParticipant(participant) {
    this.uxEventService.fireEvent({ type: 'UX_EVENT_PARTICIPANT_START_EDIT', payload: this });
    this.editingParticipant = participant;
  }

  editParticipant(participantInfo) {
    if (participantInfo) {
      participantInfo.wishId = this.wish.id;
      this.wishlistService.fireEvent({ type: 'MODEL_UPDATE_PARTICIPANT', payload: participantInfo })
    }
    this.editingParticipant = null;
    this.uxEventService.fireEvent({ type: 'UX_EVENT_PARTICIPANT_STOP_EDIT', payload: this });
  }

  deleteParticipant(participant) {
    this.wishlistService.fireEvent({ type: 'MODEL_DELETE_PARTICIPANT', payload: { wishId: this.wish.id, id: participant.id } })
  }
}
