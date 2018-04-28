import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Wishlist} from "../../models/wishlist.model";

@Component({
  selector: 'link-component',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent implements OnInit, OnDestroy {

  @Input()
  wishlist: Wishlist;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
