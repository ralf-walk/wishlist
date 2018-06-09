import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Wish} from '../../models/wish.model';
import {Participant} from '../../models/participant.model';
import {WishlistService} from '../../services/wishlist.service';
import {UxEvent, UxEventService} from '../../services/ux.event.service';

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

  editingWish = false;

  @ViewChild('editWishTitleInput')
  editWishTitleInput: ElementRef;

  creatingParticipant = false;

  editingParticipant: Participant = null;

  constructor(private modalService: NgbModal,
              private wishlistService: WishlistService,
              private uxEventService: UxEventService) {
  }

  ngOnInit() {
    this.uxEventService.observe().subscribe((uxEvent: UxEvent) => {
      if (uxEvent.type === 'UX_EVENT_START_EDIT' && uxEvent.payload === this) {
        this.editingWish = true;
      } else {
        this.editingWish = false;
      }

      if (uxEvent.type === 'UX_EVENT_PARTICIPANT_STOP_CREATE' && uxEvent.payload === this) {
        this.creatingParticipant = true;
      } else {
        this.creatingParticipant = false;
      }

      if (uxEvent.type === 'UX_EVENT_PARTICIPANT_START_EDIT' && uxEvent.payload !== this) {
        this.editingParticipant = null;
      }
    });


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
    this.uxEventService.fireEvent({type: 'UX_EVENT_STOP_EDIT', payload: this});
  }

  editWish() {
    this.uxEventService.fireEvent({type: 'UX_EVENT_START_EDIT', payload: this});
  }

  createParticipant(participantInfo) {
    if (participantInfo) {
      participantInfo.wishId = this.wish.id;
      this.wishlistService.modelAddParticipant(participantInfo);
    }
    this.uxEventService.fireEvent({type: 'UX_EVENT_PARTICIPANT_START_CREATE', payload: this});
  }

  createNewParticipant() {
    this.uxEventService.fireEvent({type: 'UX_EVENT_PARTICIPANT_STOP_CREATE', payload: this});
  }

  onEditParticipant(participant) {
    this.uxEventService.fireEvent({type: 'UX_EVENT_PARTICIPANT_START_EDIT', payload: this});
    this.editingParticipant = participant;
  }

  editParticipant(participantInfo) {
    if (participantInfo) {
      participantInfo.wishId = this.wish.id;
      this.wishlistService.modelUpdateParticipant(participantInfo);
    }
    this.editingParticipant = null;
    this.uxEventService.fireEvent({type: 'UX_EVENT_PARTICIPANT_STOP_EDIT', payload: this});
  }

  deleteParticipant(participant) {
    this.wishlistService.modelDeleteParticipant({wishId: this.wish.id, id: participant.id});
  }

  newParticipant(): Participant {
    const participant = new Participant();
    participant.amount = this.wish.value - this.wish.currentValue;
    return participant;
  }
}
