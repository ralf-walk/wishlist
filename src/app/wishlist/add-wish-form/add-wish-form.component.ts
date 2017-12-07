import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Wish } from '../../models/wish.model'

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddWishFormComponent implements OnInit {

  wish: Wish = new Wish(null, null, null);

  @Input()
  close;

  @Input()
  dismiss;

  constructor() {
  }

  submitted = false;
 
  onSubmit() {
    console.log("WUNSCH", this.wish.title);
    this.close();
  }

  ngOnInit() {

  }


}
