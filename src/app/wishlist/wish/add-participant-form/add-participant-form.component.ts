import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Participant} from '../../../models/participant.model';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import * as R from 'ramda';


@Component({
  selector: 'app-add-participant-form',
  templateUrl: './add-participant-form.component.html',
  styleUrls: ['./add-participant-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddParticipantFormComponent implements OnInit, AfterViewInit {

  addParticipantForm: FormGroup;

  @Input()
  readonly participant: Participant;

  @Input()
  readonly maxValue: number;

  @Output()
  modifiedParticipant = new EventEmitter();

  @ViewChild('formParticipantNameInput')
  formParticipantNameInput: ElementRef;

  constructor(private fb: FormBuilder) {
  }

  get name() {
    return this.addParticipantForm.get('name');
  }

  get amount() {
    return this.addParticipantForm.get('amount');
  }

  onSubmit() {
    const formModel = R.clone(this.addParticipantForm.value);

    const p = {
      id: this.participant.id,
      name: formModel.name,
      amount: formModel.amount
    };
    this.modifiedParticipant.emit(p);
  }

  ngOnInit() {
    if (this.participant) {
      this.addParticipantForm = this.fb.group({
        name: [this.participant.name, Validators.required],
        amount: [this.participant.amount, [Validators.required, this.maxValueValidator(this.maxValue)]]
      });
    }
  }

  maxValueValidator(maxValue): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const exceeded = control.value > maxValue;
      return exceeded ? {'exceeded': {value: control.value}} : null;
    };
  }

  ngAfterViewInit() {
    this.formParticipantNameInput.nativeElement.focus();
  }

  cancelFormParticipant() {
    this.modifiedParticipant.emit(null);
  }
}
