import {Component, OnInit} from '@angular/core';
import {WishlistService} from '../services/wishlist.service';
import {EditService} from '../services/edit.service';
import {PlatformLocation} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {NewWish} from "../models/new-wish.model";
import {Wish} from "../models/wish.model";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.root = this.wishlistService.getRoot();

    this.route.params.subscribe(params => {

      // try to load a wishlist
      const id = params['id'];
      this.wishlistService.loadWishlist(id);
    });
  }

  isEditMode() {
    return this.wishlistService.editMode;
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

  openSharePage() {
    const wishlistId = () => this.root.wishlist.id;
    this.router.navigate([wishlistId(), 'share']);
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }
}
