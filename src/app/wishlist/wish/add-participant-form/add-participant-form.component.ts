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
  readonly participant: Participant;

  @Output()
  modifiedParticipant = new EventEmitter();

  @ViewChild("formParticipantNameInput")
  formParticipantNameInput: ElementRef;

  formParticipant = {
    id: null,
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
      this.formParticipant.id = this.participant.id;
      this.formParticipant.name = this.participant.name;
      this.formParticipant.amount = this.participant.amount;
    } else {
      this.formParticipant = {
        id: null,
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
