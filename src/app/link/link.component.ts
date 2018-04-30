import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Wishlist} from "../models/wishlist.model";
import {UxEventService} from "../services/ux.event.service";

@Component({
  selector: 'link-component',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent implements OnInit, OnDestroy {

  @Input()
  wishlist: Wishlist;

  constructor(private uxEventService: UxEventService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  hideLinks() {
    this.uxEventService.fireEvent({type: 'UX_EVENT_HIDE_LINKS', payload: this});
  }
}
