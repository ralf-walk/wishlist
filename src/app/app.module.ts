import { rootReducer, IAppState, INITIAL_STATE } from '../store';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishComponent } from './wishlist/wish/wish.component';

import { WishlistService } from './services/wishlist.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddWishFormComponent } from './wishlist/add-wish-form/add-wish-form.component';


@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    WishComponent,
    AddWishFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    NgReduxModule
  ],
  providers: [
    WishlistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}