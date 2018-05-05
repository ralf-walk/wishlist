import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppComponent} from './app.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {WishComponent} from './wishlist/wish/wish.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {AddWishFormComponent} from './wishlist/add-wish-form/add-wish-form.component';
import {AddWishlistFormComponent} from './wishlist/add-wishlist-form/add-wishlist-form.component';
import {AddParticipantFormComponent} from './wishlist/wish/add-participant-form/add-participant-form.component';
import {LinkComponent} from './link/link.component';

import {WishlistService} from './services/wishlist.service';
import {UxEventService} from './services/ux.event.service';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestore} from 'angularfire2/firestore';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'share', component: LinkComponent, data: null},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: WishlistComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    WishComponent,
    AddWishFormComponent,
    AddWishlistFormComponent,
    AddParticipantFormComponent,
    LinkComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [
    WishlistService,
    UxEventService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
