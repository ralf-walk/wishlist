import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {WishlistService} from "../services/wishlist.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private wishlistService: WishlistService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    // try to load a wishlist
    const id_password = next.url[next.url.length].path;

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
    return true;
  }
}
