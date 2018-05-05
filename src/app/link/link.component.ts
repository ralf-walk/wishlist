import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {WishlistService} from '../services/wishlist.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-link-component',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent implements OnInit {

  root;

  constructor(private wishlistService: WishlistService,
              private location: Location) {
    if (this.wishlistService.isAdminUser()) {
      this.root = this.wishlistService.getRoot();
    }
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
