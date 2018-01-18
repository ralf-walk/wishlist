import { Component, OnInit, OnDestroy, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Participant } from '../../../models/participant.model'

@Component({
  selector: 'app-add-participant-form',
  templateUrl: './add-participant-form.component.html',
  styleUrls: ['./add-participant-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddParticipantFormComponent implements OnInit, AfterViewInit {

  @Input()
  participant: Participant;

  @Output()
  modifiedParticipant = new EventEmitter();

  @ViewChild("formParticipantNameInput")
  formParticipantNameInput: ElementRef;

  formParticipant = {
    name: null,
    amount: 0
  }

  constructor() {
  }

  submitted = false;

  onSubmit() {
    this.modifiedParticipant.emit(this.formParticipant);
  }

  ngOnInit() {
    if (this.participant) {
      this.formParticipant.name = this.participant.name;
      this.formParticipant.amount = this.participant.amount;
    } else {
      this.formParticipant = {
        name: null,
        amount: 0
      }
    }
  }

  ngAfterViewInit() {
    this.formParticipantNameInput.nativeElement.focus();
  }

  cancelFormParticipant() {
    this.modifiedParticipant.emit(null);
  }
}
