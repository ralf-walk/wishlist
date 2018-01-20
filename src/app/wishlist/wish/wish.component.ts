import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Wish } from '../../models/wish.model';
import { Participant } from '../../models/participant.model';
import { ModelService } from '../../models/model.service'

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

  creatingParticipant = false;

  editingParticipant: Participant = null;

  constructor(private modalService: NgbModal, private modelService: ModelService) {
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

  createParticipant(newParticipant) {
    if (newParticipant) {
      let participant = this.modelService.createParticipant(newParticipant.name, newParticipant.amount);
      this.wish.addParticipant(participant);
    }
    this.creatingParticipant = false;
  }

  createNewParticipant() {
    this.creatingParticipant = true;
  }

  onEditParticipant(participant: Participant) {
    this.editingParticipant = participant;
  }

  editParticipant(newParticipant) {
    if (newParticipant) {
      this.editingParticipant.name = newParticipant.name;
      this.editingParticipant.amount = newParticipant.amount;
    }
    this.editingParticipant = null;
  }
}
