import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishComponent } from './wishlist/wish/wish.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddWishFormComponent } from './wishlist/add-wish-form/add-wish-form.component';
import { AddWishlistFormComponent } from './wishlist/add-wishlist-form/add-wishlist-form.component';
import { AddParticipantFormComponent } from './wishlist/wish/add-participant-form/add-participant-form.component'

import { ModelService } from './models/model.service'
import { UxEventService } from './services/ux.event.service'

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    WishComponent,
    AddWishFormComponent,
    AddWishlistFormComponent,
    AddParticipantFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    NgReduxModule,
    AngularFontAwesomeModule
  ],
  providers: [
    ModelService,
    UxEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}