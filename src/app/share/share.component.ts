import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {WishlistService} from '../services/wishlist.service';
import {Location} from '@angular/common';
import {ShareService} from "../services/share-service";

@Component({
  selector: 'app-share-component',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareComponent implements OnInit {

  root;

  constructor(private wishlistService: WishlistService,
              private location: Location,
              private shareService: ShareService) {
      this.root = this.wishlistService.getRoot();
  }

  ngOnInit() {
  }

  getUrl() {
    return 'https://wishlist.aidado.com/' + this.root.wishlist.id;
  }

  getSubject() {
    return encodeURIComponent('Meine Wunschliste');
  }

  getBody() {
    return encodeURIComponent('Meine Wunschliste: ' + this.getUrl());
  }

  copyToClipboard() {
    const urlBox = document.getElementById('url') as HTMLInputElement;
    urlBox.focus();
    urlBox.select();
    document.execCommand('copy');
    document.getSelection().empty();
  }

  share() {
    this.shareService.share({
      title: 'Meine Wunschliste',
      text: 'Hier ist meine Wunschliste.',
      url: this.getUrl()
    });
  }

  goBack() {
    this.location.back();
  }
}
