import {Component, OnInit} from '@angular/core';
import {WishlistService} from '../services/wishlist.service';
import {EditService} from '../services/edit.service';
import {PlatformLocation} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {NewWish} from "../models/new-wish.model";
import {Wish} from "../models/wish.model";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  root;

  private newWish: NewWish;
  private wish: Wish;

  constructor(private wishlistService: WishlistService,
              private editService: EditService,
              private router: Router,
              private platformLocation: PlatformLocation,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.root = this.wishlistService.getRoot();

    this.route.params.subscribe(params => {

      // try to load a wishlist
      const id_password = params['id_password'];

      let id = null;
      let password = null;

      if (id_password.length > 1) {
        if (id_password.indexOf('-') > 0) {
          const match = id_password.match(/(.*)-(.*)/);
          id = match[1];
          password = match[2];
        } else {
          id = id_password;
        }
      }

      this.wishlistService.loadWishlist(id, password);
    });
  }

  isAdmin() {
    return this.wishlistService.isAdminUser();
  }

  modifyWishlist(editedWishlist) {
    if (editedWishlist) {
      // TODO
      // this.wishlist.title = editedWishlist.title;
    }
    this.editService.stopEditing();
  }

  editWishlist() {
    this.editService.startEditing(this.root.wishlist);
  }

  onAddWishFinished(wishInfo) {
    if (wishInfo) {
      this.wish = {
        id: null,
        url: wishInfo.url,
        title: wishInfo.title,
        description: wishInfo.description,
        image: wishInfo.image,
        value: wishInfo.value,
        currentValue: null,
        participants: []
      };
      this.editService.startEditing(this.wish);
    } else {
      this.editService.stopEditing();
    }
  }

  onEditWishFinished(wishInfo) {
    if (wishInfo) {
      this.wishlistService.modelAddWish(wishInfo);
    }
    this.editService.stopEditing();
  }

  createNewWish() {
    this.newWish = new NewWish();
    this.editService.startEditing(this.newWish);
  }

  showLinks() {
    this.router.navigate(['share']);
  }
}
