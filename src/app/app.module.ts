import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import {AppComponent} from './app.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {WishComponent} from './wishlist/wish/wish.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddWishFormComponent} from './wishlist/add-wish-form/add-wish-form.component';
import {AddWishlistFormComponent} from './wishlist/add-wishlist-form/add-wishlist-form.component';
import {AddParticipantFormComponent} from './wishlist/wish/add-participant-form/add-participant-form.component';
import {ShareComponent} from './share/share.component';

import {WishlistService} from './services/wishlist.service';
import {EditService} from './services/edit.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireStorageModule} from "@angular/fire/storage";
import {EditWishForm} from "./wishlist/edit-wish-form/edit-wish-form.component";
import {UploadService} from "./services/upload-service";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {ShareService} from "./services/share-service";
import localeDE from '@angular/common/locales/de';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeDE);

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: ':id', component: WishlistComponent},
  {path: ':id/share', component: ShareComponent, data: null}
];

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    WishComponent,
    AddWishFormComponent,
    AddWishlistFormComponent,
    AddParticipantFormComponent,
    EditWishForm,
    ShareComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    NgbModule
  ],
  providers: [
    WishlistService,
    EditService,
    UploadService,
    ShareService,
    {
      provide: LOCALE_ID,
      useValue: 'de'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
