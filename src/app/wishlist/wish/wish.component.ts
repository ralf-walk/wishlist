import { Component, Input, EventEmitter, Output, ViewChild, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { Wish } from '../../models/wish.model';
import { Participant } from '../../models/participant.model';
import { ModelService } from '../../models/model.service'
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

  constructor(private modalService: NgbModal, private modelService: ModelService, private uxEventService: UxEventService) {
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

  deleteWish() {
    this.wish.remove();
  }

  modifyWish(editedWish) {
    if (editedWish) {
      this.wish.title = editedWish.title;
      this.wish.description = editedWish.description;
      this.wish.value = editedWish.value;
    }
    this.uxEventService.fireEvent({ type: 'UX_EVENT_STOP_EDIT', payload: this });
  }

  editWish() {
    this.uxEventService.fireEvent({ type: 'UX_EVENT_START_EDIT', payload: this });
  }

  createParticipant(newParticipant) {
    if (newParticipant) {
      let participant = this.modelService.createParticipant(newParticipant.name, newParticipant.amount);
      this.wish.addParticipant(participant);
    }
    this.uxEventService.fireEvent({ type: 'UX_EVENT_PARTICIPANT_START_CREATE', payload: this });
  }

  newParticipant(): Participant {
    return this.modelService.createParticipant(null, this.wish.value - this.wish.currentValue);
  }

  createNewParticipant() {
    this.uxEventService.fireEvent({ type: 'UX_EVENT_PARTICIPANT_STOP_CREATE', payload: this });
  }

  onEditParticipant(participant: Participant) {
    this.uxEventService.fireEvent({ type: 'UX_EVENT_PARTICIPANT_START_EDIT', payload: this });
    this.editingParticipant = participant;
  }

  editParticipant(newParticipant) {
    if (newParticipant) {
      this.editingParticipant.name = newParticipant.name;
      this.editingParticipant.amount = newParticipant.amount;
    }
    this.editingParticipant = null;
    this.uxEventService.fireEvent({ type: 'UX_EVENT_PARTICIPANT_STOP_EDIT', payload: this });
  }
}
