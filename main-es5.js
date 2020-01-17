function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n\n<footer class=\"footer mt-3\">\n  <p class=\"footer-text\">\n    <a routerLink=\"/\">Wishlist</a> - Über - Impressum - AGB\n  </p>\n</footer>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"features-icons text-center pt-3\">\n  <div class=\"container\">\n    <div class=\"card dev\">\n      <h3>THIS SITE IS UNDER DEVELOPMENT AND NOT MEANT FOR USAGE.</h3>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"features-icons text-center pt-3\">\n  <div class=\"container\">\n\n    <div class=\"card bg-image-full\">\n      <div class=\"card-header bg-blue-grad\">\n        <div class=\"row\">\n          <div class=\"col-xl-9 mx-auto\">\n            <h3>Schenke das richtige. Ihre Wunschliste.</h3>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\n            <p>Hier können Sie eine neue Wunschliste anlegen. Z.B. Geburtstag Anna, oder Weihnachten Alex. Nach\n              dem\n              Erstellen\n              der Wunschliste können Sie dieser Geschenke hinzufügen.</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"text-center mt-5\">\n  <div class=\"container\">\n    <div class=\"row mt-4\">\n      <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\n        <app-add-wishlist-form (modifiedWishlist)='createWishlist($event)'></app-add-wishlist-form>\n        <a class=\"d-block mb-2\" routerLink=\"/demo-pw\">Beispiel Wunschliste ansehen</a>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"features-icons text-center mt-5\">\n  <div class=\"container\">\n    <div class=\"card\" style=\"background-color: #f5f5f5\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\n            <p class=\"m-3\">Wollen Sie jemanden beschenken, aber nicht einfach irgendwas?\n              Mit einer Wunschliste können Sie ganz gezielt Wünsche festlegen und Beträge setzen.\n              Sie haben zu jeder Zeit den vollen Überblick über die Wünsche, können Änderungen vornehmen und so\n              weiter.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/link/link.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/link/link.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLinkLinkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row mt-3\" *ngIf=\"root.wishlist\">\n\n    <div class=\"col-12 col-lg-10 mt-3 mr-auto ml-auto\">\n      <div class=\"card link-card\">\n        <div class=\"card-header bg-blue-grad\">\n          Wunschliste teilen...\n          <img class=\"img-fluid img-link-icon-share\" src=\"./assets/img/gruppe.png\">\n        </div>\n        <div class=\"card-body bg-image-full text-center\">\n\n          <p class=\"mt-3 mb-0 link-container-description\">\n            Jeder mit diesem Link kann sich an Wünschen beteiligen. Es ist kein Konto erforderlich.\n          </p>\n\n          <div class=\"mt-3 link-container-link mr-auto\">\n            <span class=\"link-container-link-text\">https://wishlist.aidado.com/{{root.wishlist.id}}</span>\n          </div>\n          <div class=\"mt-3 btn-group\" role=\"group\">\n            <button class=\"fa fa-eye btn btn-secondary\" type=\"button\" aria-hidden=\"true\"></button>\n            <button class=\"fa fa-copy btn btn-secondary\" type=\"button\" aria-hidden=\"true\"></button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row mt-3\" *ngIf=\"root.wishlist\">\n    <div class=\"col-12 col-lg-10  mt-3 mr-auto ml-auto text-center\">\n    <span>Zum weiteren Bearbeiten der Wunschliste verwenden Sie bitte folgenden Link:<br>\n    https://wishlist.aidado.com/{{root.wishlist.id}}-{{root.wishlist.password}}\n    <img class=\"img-fluid img-link-icon-edit\" src=\"./assets/img/wrench.png\"></span>\n    </div>\n  </div>\n\n  <div class=\"row mt-3\" *ngIf=\"root.wishlist\">\n    <div class=\"col text-center mt-3\">\n      <button class=\"btn btn-info\" (click)=\"goBack()\"><i class=\"fa fa-arrow-left mr-2\"></i>Zurück zur Wunschliste\n      </button>\n    </div>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/add-wish-form/add-wish-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/add-wish-form/add-wish-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishlistAddWishFormAddWishFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"addWishForm\" class=\"container\">\n\n  <div class=\"form-group row mb-1\">\n    <div class=\"col-sm-2 text-right\">\n      <label for=\"url\">Url</label>\n    </div>\n    <div class=\"col-sm-10\">\n      <input #formWishUrlInput formControlName=\"url\" type=\"text\" class=\"form-control form-control-sm\" id=\"url\"\n             name=\"url\">\n    </div>\n  </div>\n\n  <div class=\"form-group row mb-1\">\n    <div class=\"col-sm-2 text-right\">\n      <label for=\"value\">Betrag</label>\n    </div>\n    <div class=\"col-sm-3\">\n      <input formControlName=\"value\" type=\"number\" class=\"form-control form-control-sm\" name=\"value\" id=\"value\">\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"clearfix\">\n        <div class=\"float-right btn-group\" role=\"group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"addWishForm.pristine || addWishForm.invalid\">Weiter\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelFormWish()\">Abbrechen</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/add-wishlist-form/add-wishlist-form.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/add-wishlist-form/add-wishlist-form.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishlistAddWishlistFormAddWishlistFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"wishlistForm\">\n\n  <div class=\"form-group row mb-0\">\n    <div class=\"col-sm-12\">\n      <div class=\"input-group mb-3\">\n        <input class=\"form-control form-control-sm\" #formWishlistTitleInput formControlName=\"title\" type=\"text\"\n               id=\"title\"\n               name=\"title\"\n               placeholder=\"Titel der neuen Wunschliste\">\n        <div class=\"input-group-append\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"wishlistForm.pristine || wishlistForm.invalid\">Ok\n          </button>\n          <button *ngIf=\"wishlist\" type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelFormWishlist()\">Cancel\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/edit-wish-form/edit-wish-form.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/edit-wish-form/edit-wish-form.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishlistEditWishFormEditWishFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"addWishForm\" class=\"container\">\n\n  <div class=\"form-group row mb-1\">\n    <div class=\"col-sm-2 text-right\">\n      <label for=\"url\">Url</label>\n    </div>\n    <div class=\"col-sm-10\">\n      <input #formWishUrlInput formControlName=\"url\" type=\"text\" class=\"form-control form-control-sm\"\n             id=\"url\" name=\"url\" placeholder=\"Url\">\n    </div>\n  </div>\n\n  <div class=\"form-group row mb-1\">\n    <div class=\"col-sm-2 text-right\">\n      <label for=\"value\">Betrag</label>\n    </div>\n    <div class=\"col-sm-3\">\n      <input formControlName=\"value\" type=\"number\" class=\"form-control form-control-sm\" name=\"value\" id=\"value\"\n             placeholder=\"Betrag\">\n    </div>\n  </div>\n\n  <div class=\"form-group row mb-1\">\n    <div class=\"col-sm-2 text-right\">\n      <label for=\"title\">Titel</label>\n    </div>\n    <div class=\"col-sm-10 text-right\">\n      <input formControlName=\"title\" type=\"text\" class=\"form-control form-control-sm\"\n             id=\"title\" name=\"title\" placeholder=\"Titel\">\n    </div>\n  </div>\n\n  <div class=\"form-group row mb-1\">\n    <div class=\"col-sm-2 text-right\">\n      <label for=\"description\">Beschreibung</label>\n    </div>\n    <div class=\"col-sm-10\">\n      <textarea formControlName=\"description\" class=\"form-control form-control-sm\" id=\"description\" rows=\"3\"\n                name=\"description\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"form-group row mb-1\">\n    <div class=\"col-sm-2 text-right\">\n      <label for=\"description\">Bild</label>\n    </div>\n    <div *ngIf=\"imgUrl\" class=\"col-sm-4 pb-2\">\n      <img class=\"img-fluid rounded\" [src]=\"imgUrl\">\n    </div>\n    <div class=\"col-sm-3 pb-2\">\n      <label class=\"btn btn-default btn-file\">\n        Bild hochladen <input type=\"file\" style=\"display: none;\" (change)=\"detectFiles($event)\">\n      </label>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"clearfix\">\n        <div class=\"float-right btn-group\" role=\"group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"addWishForm.invalid\">Ok\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelFormWish()\">Cancel</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wish/add-participant-form/add-participant-form.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wish/add-participant-form/add-participant-form.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishlistWishAddParticipantFormAddParticipantFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"addParticipantForm\" class=\"form-inline\">\n  <div class=\"container\">\n    <div class=\"form-group row\">\n      <input #formParticipantNameInput formControlName=\"name\" type=\"text\"\n             class=\"form-control form-control-sm col-sm-12 mb-1\"\n             name=\"name\" id=\"name\" placeholder=\"Name\">\n\n      <input formControlName=\"amount\" type=\"number\"\n             class=\"form-control form-control-sm col-sm-12 mb-1\"\n             name=\"amount\" id=\"amount\" placeholder=\"Wert\">\n    </div>\n\n    <div class=\"row\" *ngIf=\"(name.dirty || amount.dirty) && addParticipantForm.invalid\">\n      <div class=\"alert alert-danger col-12\">\n        <p *ngIf=\"name.invalid\">\n          Bitte geben Sie einen Namen ein.\n        </p>\n        <p *ngIf=\"amount.invalid\">\n          Sie können maximal {{maxValue | currency:'EUR':'symbol-narrow'}} schenken.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"clearfix\">\n          <div class=\"float-right btn-group\" role=\"group\">\n            <button type=\"submit\" class=\"btn btn-success\"\n                    [disabled]=\"addParticipantForm.pristine || addParticipantForm.invalid\">Ok\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelFormParticipant()\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wish/wish.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wish/wish.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishlistWishWishComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"this.editService.isEditing(this.wish)\" class=\"card-header\">\n  <app-edit-wish-form [wish]='wish' (modifiedWish)='modifyWish($event)'></app-edit-wish-form>\n</div>\n\n<div *ngIf=\"!editService.isEditing(wish)\" class=\"card-header bg-blue-grad\">\n\n  <div class=\"row\">\n    <div class=\"col-10 col-md-6 col-lg-7\">\n      <h6 class=\"card-title float-left\">{{wish.title}}</h6>\n    </div>\n\n    <div class=\"col-2 col-md-2 order-md-12 col-lg-2 order-lg-12\">\n      <div *ngIf=\"adminAccount\" class=\"btn-group float-right\" role=\"group\">\n        <button class=\"fa fa-pencil btn btn-secondary\" type=\"button\" aria-hidden=\"true\" (click)=\"editWish()\"></button>\n        <button class=\"fa fa-trash btn btn-secondary\" type=\"button\" aria-hidden=\"true\" (click)=\"deleteWish()\"></button>\n      </div>\n    </div>\n    <img class=\"img-fluid img-pin\" src=\"./assets/img/pin.png\">\n\n    <div class=\"col-12 col-md-4 col-lg-3\">\n      <ngb-progressbar class=\"mt-1 align-middle\" type=\"info\" height=\"20px\" [value]=\"getPercent()\">\n        <div class=\"progress-bar-content\">{{wish.currentValue | currency:'EUR':'symbol-narrow'}} von {{wish.value |\n          currency:'EUR':'symbol-narrow'}}\n        </div>\n      </ngb-progressbar>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"card-body bg-color-grey\">\n  <div class=\"row\">\n    <div *ngIf=\"!wish.image\" class=\"col-md-6 col-lg-7\">\n      <p class=\"card-text\">{{wish.description}}</p>\n    </div>\n    <div *ngIf=\"wish.image\" class=\"col-md-6 col-lg-7\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 pb-2 text-center\">\n          <img class=\"img-fluid rounded\" [src]=\"wish.image\">\n        </div>\n        <div class=\"col-lg-6\">\n          <p class=\"card-text\">{{wish.description}}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-lg-5\">\n      <div class=\"card\">\n\n        <div class=\"card-header\">\n          <p *ngIf=\"!isGiven()\">Hier können Sie sich am Geschenk beteiligen</p>\n          <div *ngIf=\"isGiven()\" class=\"cleafix\">\n            <div class=\"float-left\">\n              Verschenkt\n            </div>\n            <div class=\"float-right\">\n              <img class=\"img-fluid img-present\" src=\"./assets/img/present.png\">\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body card-body-participant\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item participant-item clearfix\" *ngFor=\"let participant of wish.participants\">\n              <div *ngIf=\"editService.isNotEditing(participant)\">\n                <span class=\"float-left\">{{participant.name}}</span>\n                <span class=\"float-right\">\n                  {{participant.amount | currency:'EUR':'symbol-narrow'}}\n                  <span class=\"fa fa-trash btn btn-secondary\" (click)=\"deleteParticipant(participant)\"></span>\n                <span class=\"fa fa-pencil btn btn-secondary\" (click)=\"onEditParticipant(participant)\"></span>\n                </span>\n              </div>\n              <app-add-participant-form *ngIf=\"editService.isEditing(participant)\" [participant]='participant'\n                                        [maxValue]=\"getMaxValue(participant)\"\n                                        (modifiedParticipant)='editParticipant($event)'></app-add-participant-form>\n            </li>\n          </ul>\n\n          <div *ngIf=\"!isGiven()\">\n            <input *ngIf=\"editService.isNotEditing(this.newParticipant)\" type=\"text\"\n                   class=\"form-control form-control-sm\"\n                   placeholder=\"Beteiligen\" (click)=\"createNewParticipant()\">\n            <app-add-participant-form *ngIf=\"editService.isEditing(this.newParticipant)\"\n                                      [participant]='newParticipant'\n                                      [maxValue]=\"getMaxValue(newParticipant)\"\n                                      (modifiedParticipant)='createParticipant($event)'></app-add-participant-form>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWishlistWishlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"text-center p-3\">\n\n  <div class=\"container\" *ngIf=\"root.wishlist\">\n    <div class=\"card bg-image-full\">\n\n      <app-add-wishlist-form *ngIf=\"editService.isEditing(root.wishlist)\" [wishlist]='root.wishlist'\n                             (modifiedWishlist)='modifyWishlist($event)'></app-add-wishlist-form>\n\n      <div *ngIf=\"editService.isNotEditing(root.wishlist)\" class=\"card-body\">\n\n        <div class=\"row\">\n          <div class=\"col-10 col-md-6 col-lg-7\">\n            <h5 class=\"card-title float-left\">{{root.wishlist.title}}</h5>\n          </div>\n\n          <div *ngIf=\"isAdmin()\" class=\"col-2 col-md-2 order-md-12 col-lg-2 order-lg-12\">\n            <div class=\"btn-group float-right\" role=\"group\">\n              <button class=\"fa fa-pencil btn btn-secondary\" type=\"button\" aria-hidden=\"true\"\n                      (click)=\"editWishlist()\"></button>\n              <button class=\"fa fa-trash btn btn-secondary\" type=\"button\" aria-hidden=\"true\"\n                      (click)=\"root.wishlist.deleteWishlist()\"></button>\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-4 col-lg-3\">\n            <h5 class=\"badge-gesamtbetrag badge badge-info\">Gesamtbetrag {{root.wishlist.sum |\n              currency:'EUR':'symbol-narrow'}}</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <app-wish class=\"card card-wish mt-3\" *ngFor=\"let wish of root.wishlist.wishes\" [wish]='wish'\n              [adminAccount]=\"isAdmin()\">\n    </app-wish>\n\n    <div *ngIf=\"editService.isNotEditing(newWish) && editService.isNotEditing(wish) && isAdmin()\" class=\"card mt-3 card-new-wish\">\n      <img class=\"img-fluid img-add\" src=\"./assets/img/add.png\">\n      <div class=\"card-header\">\n        <p>Hier können Sie der Wunschliste einen neuen Wunsch hinzufügen.</p>\n      </div>\n      <div class=\"card-body\">\n        <input type=\"text\" class=\"form-control form-control-sm col-sm-12 col-md-6 m-auto\" id=\"description\"\n               name=\"description\"\n               placeholder=\"Neuen Wunsch anlegen\"\n               (click)=\"createNewWish()\">\n      </div>\n    </div>\n\n    <div *ngIf=\"editService.isEditing(newWish)\" class=\"card mt-3 card-new-wish\">\n      <img class=\"img-fluid img-add\" src=\"./assets/img/add.png\">\n      <div class=\"card-header\">\n        <h6>Neuen Wunsch anlegen - Schritt 1 von 2</h6>\n      </div>\n      <div class=\"card-body\">\n        <app-add-wish-form (modifiedWish)='onAddWishFinished($event)'></app-add-wish-form>\n      </div>\n    </div>\n\n    <div *ngIf=\"editService.isEditing(wish)\" class=\"card mt-3 card-new-wish\">\n      <img class=\"img-fluid img-add\" src=\"./assets/img/add.png\">\n      <div class=\"card-header\">\n        <h6>Neuen Wunsch anlegen - Schritt 2 von 2</h6>\n      </div>\n      <div class=\"card-body\">\n        <app-edit-wish-form [wish]='wish' (modifiedWish)='onEditWishFinished($event)'></app-edit-wish-form>\n      </div>\n    </div>\n\n    <div *ngIf=\"isAdmin()\" class=\"text-center mt-3\">\n      <button class=\"btn btn-info mb-3\" (click)=\"showLinks()\">Teile Wunschliste<i class=\"fa fa-share-alt ml-2\"></i>\n      </button>\n    </div>\n\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer-text {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wishlist/wishlist.component */
    "./src/app/wishlist/wishlist.component.ts");
    /* harmony import */


    var _wishlist_wish_wish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./wishlist/wish/wish.component */
    "./src/app/wishlist/wish/wish.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _wishlist_add_wish_form_add_wish_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./wishlist/add-wish-form/add-wish-form.component */
    "./src/app/wishlist/add-wish-form/add-wish-form.component.ts");
    /* harmony import */


    var _wishlist_add_wishlist_form_add_wishlist_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./wishlist/add-wishlist-form/add-wishlist-form.component */
    "./src/app/wishlist/add-wishlist-form/add-wishlist-form.component.ts");
    /* harmony import */


    var _wishlist_wish_add_participant_form_add_participant_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./wishlist/wish/add-participant-form/add-participant-form.component */
    "./src/app/wishlist/wish/add-participant-form/add-participant-form.component.ts");
    /* harmony import */


    var _link_link_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./link/link.component */
    "./src/app/link/link.component.ts");
    /* harmony import */


    var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/wishlist.service */
    "./src/app/services/wishlist.service.ts");
    /* harmony import */


    var _services_edit_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/edit.service */
    "./src/app/services/edit.service.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _wishlist_edit_wish_form_edit_wish_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./wishlist/edit-wish-form/edit-wish-form.component */
    "./src/app/wishlist/edit-wish-form/edit-wish-form.component.ts");
    /* harmony import */


    var _services_upload_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/upload-service */
    "./src/app/services/upload-service.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");

    var appRoutes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"]
    }, {
      path: 'share',
      component: _link_link_component__WEBPACK_IMPORTED_MODULE_13__["LinkComponent"],
      data: null
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: ':id_password',
      component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_6__["WishlistComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_6__["WishlistComponent"], _wishlist_wish_wish_component__WEBPACK_IMPORTED_MODULE_7__["WishComponent"], _wishlist_add_wish_form_add_wish_form_component__WEBPACK_IMPORTED_MODULE_10__["AddWishFormComponent"], _wishlist_add_wishlist_form_add_wishlist_form_component__WEBPACK_IMPORTED_MODULE_11__["AddWishlistFormComponent"], _wishlist_wish_add_participant_form_add_participant_form_component__WEBPACK_IMPORTED_MODULE_12__["AddParticipantFormComponent"], _wishlist_edit_wish_form_edit_wish_form_component__WEBPACK_IMPORTED_MODULE_22__["EditWishForm"], _link_link_component__WEBPACK_IMPORTED_MODULE_13__["LinkComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_24__["AngularFireDatabaseModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forRoot(appRoutes, {
        enableTracing: false
      } // <-- debugging purposes only
      ), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]],
      providers: [_services_wishlist_service__WEBPACK_IMPORTED_MODULE_14__["WishlistService"], _services_edit_service__WEBPACK_IMPORTED_MODULE_15__["EditService"], _services_upload_service__WEBPACK_IMPORTED_MODULE_23__["UploadService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".body-new-wishlist {\n  background-color: beige;\n}\n\n.bg-image-full {\n  background: no-repeat center center scroll;\n  background-size: cover;\n  -o-background-size: cover;\n  background-image: url('bg.jpg')\n}\n\n.bg-blue-grad {\n  background: -webkit-gradient(linear, left top, right top, from(#79bac5), to(#f8f9fa));\n  background: linear-gradient(90deg, #79bac5, #f8f9fa);\n}\n\n.dev {\n  background: lightcoral;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFHMUMsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0UscUZBQW9EO0VBQXBELG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHktbmV3LXdpc2hsaXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG59XG5cbi5iZy1pbWFnZS1mdWxsIHtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2JnLmpwZycpXG59XG5cbi5iZy1ibHVlLWdyYWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3OWJhYzUsICNmOGY5ZmEpO1xufVxuXG4uZGV2IHtcbiAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/wishlist.service */
    "./src/app/services/wishlist.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(wishlistService, router) {
        _classCallCheck(this, HomeComponent);

        this.wishlistService = wishlistService;
        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.sub = this.wishlistService.getRootUpdates().subscribe(function (wishlist) {
            if (wishlist) {
              var path = wishlist.id + '-' + wishlist.password;

              _this.router.navigate([path]);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }, {
        key: "createWishlist",
        value: function createWishlist(wishlistInfo) {
          if (wishlistInfo) {
            this.wishlistService.createWishlist(wishlistInfo);
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/link/link.component.css":
  /*!*****************************************!*\
    !*** ./src/app/link/link.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppLinkLinkComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".link-card {\n  height: 100%\n}\n\n.link-container {\n  background-color: beige;\n}\n\n.link-container-link {\n  padding-left: 0.5rem;\n  border-radius: 6px;\n  background-color: #fff;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.link-container-description {\n  color: black;\n}\n\n.link-container-link-text {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.img-link-icon-share {\n  position: absolute;\n  right: 0.5rem;\n  top: -0.5rem;\n  height: 4rem;\n}\n\n.img-link-icon-edit {\n  height: 2rem;\n}\n\n.bg-image-full {\n  background: no-repeat center center scroll;\n  background-size: cover;\n  -o-background-size: cover;\n  background-image: url('bg.jpg')\n}\n\n.bg-blue-grad {\n  background: -webkit-gradient(linear, left top, right top, from(#79bac5), to(#f8f9fa));\n  background: linear-gradient(90deg, #79bac5, #f8f9fa);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluay9saW5rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBDQUEwQztFQUcxQyxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRSxxRkFBb0Q7RUFBcEQsb0RBQW9EO0FBQ3REIiwiZmlsZSI6InNyYy9hcHAvbGluay9saW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluay1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlXG59XG5cbi5saW5rLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuXG4ubGluay1jb250YWluZXItbGluayB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxpbmstY29udGFpbmVyLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubGluay1jb250YWluZXItbGluay10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaW1nLWxpbmstaWNvbi1zaGFyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgdG9wOiAtMC41cmVtO1xuICBoZWlnaHQ6IDRyZW07XG59XG5cbi5pbWctbGluay1pY29uLWVkaXQge1xuICBoZWlnaHQ6IDJyZW07XG59XG5cbi5iZy1pbWFnZS1mdWxsIHtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgc2Nyb2xsO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2JnLmpwZycpXG59XG5cbi5iZy1ibHVlLWdyYWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3OWJhYzUsICNmOGY5ZmEpO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/link/link.component.ts":
  /*!****************************************!*\
    !*** ./src/app/link/link.component.ts ***!
    \****************************************/

  /*! exports provided: LinkComponent */

  /***/
  function srcAppLinkLinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinkComponent", function () {
      return LinkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/wishlist.service */
    "./src/app/services/wishlist.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var LinkComponent =
    /*#__PURE__*/
    function () {
      function LinkComponent(wishlistService, location) {
        _classCallCheck(this, LinkComponent);

        this.wishlistService = wishlistService;
        this.location = location;

        if (this.wishlistService.isAdminUser()) {
          this.root = this.wishlistService.getRoot();
        }
      }

      _createClass(LinkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }]);

      return LinkComponent;
    }();

    LinkComponent.ctorParameters = function () {
      return [{
        type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    LinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-link-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./link.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/link/link.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./link.component.css */
      "./src/app/link/link.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])], LinkComponent);
    /***/
  },

  /***/
  "./src/app/models/new-wish.model.ts":
  /*!******************************************!*\
    !*** ./src/app/models/new-wish.model.ts ***!
    \******************************************/

  /*! exports provided: NewWish */

  /***/
  function srcAppModelsNewWishModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewWish", function () {
      return NewWish;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var NewWish = function NewWish() {
      _classCallCheck(this, NewWish);

      this.value = 0;
    };
    /***/

  },

  /***/
  "./src/app/models/participant.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/participant.model.ts ***!
    \*********************************************/

  /*! exports provided: Participant */

  /***/
  function srcAppModelsParticipantModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Participant", function () {
      return Participant;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Participant = function Participant() {
      _classCallCheck(this, Participant);
    };
    /***/

  },

  /***/
  "./src/app/models/upload.ts":
  /*!**********************************!*\
    !*** ./src/app/models/upload.ts ***!
    \**********************************/

  /*! exports provided: Upload */

  /***/
  function srcAppModelsUploadTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Upload", function () {
      return Upload;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Upload = function Upload(file) {
      _classCallCheck(this, Upload);

      this.createdAt = new Date();
      this.file = file;
    };
    /***/

  },

  /***/
  "./src/app/models/wish.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/wish.model.ts ***!
    \**************************************/

  /*! exports provided: Wish */

  /***/
  function srcAppModelsWishModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Wish", function () {
      return Wish;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Wish = function Wish() {
      _classCallCheck(this, Wish);

      this.participants = [];
      this.value = 0;
      this.currentValue = 0;
    };
    /***/

  },

  /***/
  "./src/app/models/wishlist.model.ts":
  /*!******************************************!*\
    !*** ./src/app/models/wishlist.model.ts ***!
    \******************************************/

  /*! exports provided: Wishlist */

  /***/
  function srcAppModelsWishlistModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Wishlist", function () {
      return Wishlist;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Wishlist = function Wishlist() {
      _classCallCheck(this, Wishlist);

      this.wishes = [];
      this.sum = 0;
    };
    /***/

  },

  /***/
  "./src/app/services/edit.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/edit.service.ts ***!
    \******************************************/

  /*! exports provided: EditService */

  /***/
  function srcAppServicesEditServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditService", function () {
      return EditService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EditService =
    /*#__PURE__*/
    function () {
      function EditService() {
        _classCallCheck(this, EditService);

        this.currentEditingObject = null;
      }

      _createClass(EditService, [{
        key: "stopEditing",
        value: function stopEditing() {
          this.currentEditingObject = null;
        }
      }, {
        key: "isEditing",
        value: function isEditing(obj) {
          return obj !== null && this.currentEditingObject === obj;
        }
      }, {
        key: "isNotEditing",
        value: function isNotEditing(obj) {
          return obj === null || this.currentEditingObject !== obj;
        }
      }, {
        key: "startEditing",
        value: function startEditing(objectToEdit) {
          this.currentEditingObject = objectToEdit;
        }
      }]);

      return EditService;
    }();

    EditService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], EditService);
    /***/
  },

  /***/
  "./src/app/services/upload-service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/upload-service.ts ***!
    \********************************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppServicesUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var UploadService =
    /*#__PURE__*/
    function () {
      function UploadService(db, afs, storage) {
        _classCallCheck(this, UploadService);

        this.db = db;
        this.afs = afs;
        this.storage = storage;
        this.basePath = '/uploads';
      }

      _createClass(UploadService, [{
        key: "pushUpload",
        value: function pushUpload(upload, wish) {
          var filePath = "".concat(this.basePath, "/").concat(upload.file.name);
          console.log('BAUM', filePath);
          var fileRef = this.storage.ref(filePath);
          var task = fileRef.put(upload.file); // observe percentage changes

          this._uploadPercent = task.percentageChanges(); // get notified when the download URL is available

          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            var downloadUrl = fileRef.getDownloadURL();
            downloadUrl.subscribe(function (url) {
              console.log('URL', url);
              wish.image = url;
            });
          })).subscribe();
        }
      }, {
        key: "uploadPercent",
        get: function get() {
          return this._uploadPercent;
        }
      }]);

      return UploadService;
    }();

    UploadService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
      }];
    };

    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])], UploadService);
    /***/
  },

  /***/
  "./src/app/services/wishlist.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/wishlist.service.ts ***!
    \**********************************************/

  /*! exports provided: WishlistService */

  /***/
  function srcAppServicesWishlistServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistService", function () {
      return WishlistService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");

    var WishlistService =
    /*#__PURE__*/
    function () {
      function WishlistService(http, afs) {
        var _this2 = this;

        _classCallCheck(this, WishlistService);

        this.http = http;
        this.afs = afs;
        this.demoWishlist = {
          id: 'demo',
          title: 'Geburtstag',
          password: 'pw',
          sum: 122,
          wishes: [{
            id: 'as3f',
            url: '',
            title: 'Barby',
            description: 'Eine Barby von etwa 20cm Größe.',
            image: './assets/img/Baby.jpeg',
            value: 23,
            currentValue: 0,
            participants: []
          }, {
            id: 'vds5',
            url: '',
            title: 'Playmobil',
            description: 'Mit Ställen, Geräteraum sowie einem Wohnbereich für die Bauersfamilie.\ ' + 'Mit dem Lastenaufzug werden Vorräte auf den Speicher transportiert. \D' + 'ie Melkmaschine ist fahrbar und die Äpfel können vom Baum gepflückt werden.',
            image: './assets/img/Bauernhof.jpeg',
            value: 99,
            currentValue: 46,
            participants: [{
              id: 'dwfwe3242',
              name: 'Hans',
              amount: 12
            }, {
              id: 'sdvvs8d',
              name: 'Maria',
              amount: 34
            }]
          }]
        };
        this.publicWishlist = null;
        this.root = {
          adminAccount: false,
          wishlist: this.publicWishlist
        };
        this.wishlistSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.password = null;
        this.wishlistSubject.subscribe(function (wishlist) {
          _this2.privateWishlist = wishlist;
          _this2.root.wishlist = wishlist;
        });
      }

      _createClass(WishlistService, [{
        key: "getRoot",
        value: function getRoot() {
          return this.root;
        }
      }, {
        key: "getRootUpdates",
        value: function getRootUpdates() {
          return this.wishlistSubject;
        }
      }, {
        key: "createWishlist",
        value: function createWishlist(wishlistInfo) {
          var title = wishlistInfo.title;
          var id = Math.random().toString(36).substring(7);
          var password = Math.random().toString(36).substring(7);
          this.wishlistDoc = this.afs.collection('wishlists').doc(id);
          this.wishlistDoc.valueChanges().subscribe(this.wishlistSubject);
          this.wishlistDoc.set({
            id: id,
            password: password,
            title: title,
            sum: 0,
            wishes: []
          });
        }
      }, {
        key: "loadWishlist",
        value: function loadWishlist(id, password) {
          this.password = password;

          if (id === 'demo') {
            this.save(this.demoWishlist);
          } else {
            this.wishlistDoc = this.afs.collection('wishlists').doc(id);
            this.wishlistDoc.valueChanges().subscribe(this.wishlistSubject);
          }
        }
      }, {
        key: "deleteWishlist",
        value: function deleteWishlist() {
          if (this.isAdminUser()) {
            this.wishlistDoc.delete();
          }
        }
      }, {
        key: "modelAddWish",
        value: function modelAddWish(wishInfo) {
          var newWishlist = ramda__WEBPACK_IMPORTED_MODULE_5__["clone"](this.privateWishlist);
          var wish = {
            id: Math.random().toString(36).substring(7),
            url: wishInfo.url,
            title: wishInfo.title,
            description: wishInfo.description,
            image: wishInfo.image,
            value: wishInfo.value,
            currentValue: null,
            participants: []
          };
          newWishlist.wishes.push(wish);

          this._calculateWishlistSum(newWishlist);

          this.save(newWishlist);
        }
      }, {
        key: "modelDeleteWish",
        value: function modelDeleteWish(wishInfo) {
          var newWishlist = ramda__WEBPACK_IMPORTED_MODULE_5__["clone"](this.privateWishlist);

          var wish = this._findWish(newWishlist, wishInfo.id);

          var index = newWishlist.wishes.indexOf(wish);

          if (index >= 0) {
            newWishlist.wishes.splice(index, 1);

            this._calculateWishlistSum(newWishlist);
          }

          this.save(newWishlist);
        }
      }, {
        key: "modelUpdateWish",
        value: function modelUpdateWish(wishInfo) {
          var newWishlist = ramda__WEBPACK_IMPORTED_MODULE_5__["clone"](this.privateWishlist);

          var wish = this._findWish(newWishlist, wishInfo.id);

          if (wish) {
            wish.title = wishInfo.title;
            wish.description = wishInfo.description;
            wish.value = wishInfo.value;
            wish.image = wishInfo.image;

            this._calculateWishlistSum(newWishlist);
          }

          this.save(newWishlist);
        }
      }, {
        key: "modelAddParticipant",
        value: function modelAddParticipant(participantInfo) {
          var newWishlist = ramda__WEBPACK_IMPORTED_MODULE_5__["clone"](this.privateWishlist);

          var wish = this._findWish(newWishlist, participantInfo.wishId);

          var participant = {
            id: Math.random().toString(36).substring(7),
            name: participantInfo.name,
            amount: participantInfo.amount
          };
          wish.participants.push(participant);

          this._calculateWishSum(wish);

          this.save(newWishlist);
        }
      }, {
        key: "modelDeleteParticipant",
        value: function modelDeleteParticipant(participantInfo) {
          var newWishlist = ramda__WEBPACK_IMPORTED_MODULE_5__["clone"](this.privateWishlist);

          var wish = this._findWish(newWishlist, participantInfo.wishId);

          var participant = this._findParticipant(newWishlist, participantInfo.wishId, participantInfo.id);

          var index = wish.participants.indexOf(participant);

          if (index >= 0) {
            wish.participants.splice(index, 1);

            this._calculateWishSum(wish);
          }

          this.save(newWishlist);
        }
      }, {
        key: "modelUpdateParticipant",
        value: function modelUpdateParticipant(participantInfo) {
          var newWishlist = ramda__WEBPACK_IMPORTED_MODULE_5__["clone"](this.privateWishlist);

          var wish = this._findWish(newWishlist, participantInfo.wishId);

          var participant = this._findParticipant(newWishlist, participantInfo.wishId, participantInfo.id);

          participant.name = participantInfo.name;
          participant.amount = participantInfo.amount;

          this._calculateWishSum(wish);

          this.save(newWishlist);
        }
      }, {
        key: "isAdminUser",
        value: function isAdminUser() {
          if (this.password && this.privateWishlist) {
            return this.password === this.privateWishlist.password;
          }

          return false;
        } // ### FIRESTORE FUNCTION

      }, {
        key: "wishlistObs",
        value: function wishlistObs() {
          return this.wishlistSubject;
        }
      }, {
        key: "save",
        value: function save(wishlist) {
          var persist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (wishlist) {
            this.wishlistSubject.next(wishlist);

            if (persist && wishlist.id !== 'demo') {
              this.wishlistDoc.set(wishlist);
            }
          }
        } // ### HELPER FUNCTIONS ###

      }, {
        key: "_findWish",
        value: function _findWish(wishlist, wishId) {
          return wishlist.wishes.find(function (wish) {
            return wish.id === wishId;
          });
        }
      }, {
        key: "_findParticipant",
        value: function _findParticipant(wishlist, wishId, participantId) {
          var wish = wishlist.wishes.find(function (w) {
            return w.id === wishId;
          });

          if (wish) {
            return wish.participants.find(function (participant) {
              return participant.id === participantId;
            });
          }

          return null;
        }
      }, {
        key: "_calculateWishlistSum",
        value: function _calculateWishlistSum(wishlist) {
          var newSum = 0;
          wishlist.wishes.forEach(function (wish) {
            newSum += wish.value;
          });
          wishlist.sum = newSum;
        }
      }, {
        key: "_calculateWishSum",
        value: function _calculateWishSum(wish) {
          var newSum = 0;
          wish.participants.forEach(function (participant) {
            newSum += participant.amount;
          });
          wish.currentValue = newSum;
        }
      }]);

      return WishlistService;
    }();

    WishlistService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }];
    };

    WishlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])], WishlistService);
    /***/
  },

  /***/
  "./src/app/wishlist/add-wish-form/add-wish-form.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/wishlist/add-wish-form/add-wish-form.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishlistAddWishFormAddWishFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3QvYWRkLXdpc2gtZm9ybS9hZGQtd2lzaC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEIsRUFBRSxVQUFVO0FBQzVDOztBQUVBO0VBQ0UsOEJBQThCLEVBQUUsUUFBUTtBQUMxQyIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0L2FkZC13aXNoLWZvcm0vYWRkLXdpc2gtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/wishlist/add-wish-form/add-wish-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/wishlist/add-wish-form/add-wish-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AddWishFormComponent */

  /***/
  function srcAppWishlistAddWishFormAddWishFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddWishFormComponent", function () {
      return AddWishFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var AddWishFormComponent =
    /*#__PURE__*/
    function () {
      function AddWishFormComponent(fb, http) {
        _classCallCheck(this, AddWishFormComponent);

        this.fb = fb;
        this.http = http;
        this.modifiedWish = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AddWishFormComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          var formModel = ramda__WEBPACK_IMPORTED_MODULE_3__["clone"](this.addWishForm.value);
          var url = formModel.url;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
          headers = headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
          var key = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].linkpreview.key;
          var grabUrl = 'key=' + key + '&q=' + url;
          this.http.post('https://api.linkpreview.net', grabUrl, {
            headers: headers
          }).subscribe(function (ogData) {
            var formModel = ramda__WEBPACK_IMPORTED_MODULE_3__["clone"](_this3.addWishForm.value);
            var w = {
              url: url,
              value: formModel.value,
              title: ogData['title'],
              description: ogData['description'],
              image: ogData['image']
            };

            _this3.modifiedWish.emit(w);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addWishForm = this.fb.group({
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.formWishUrlInput.nativeElement.focus();
        }
      }, {
        key: "cancelFormWish",
        value: function cancelFormWish() {
          this.modifiedWish.emit(null);
        }
      }]);

      return AddWishFormComponent;
    }();

    AddWishFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddWishFormComponent.prototype, "modifiedWish", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formWishUrlInput', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddWishFormComponent.prototype, "formWishUrlInput", void 0);
    AddWishFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-wish-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-wish-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/add-wish-form/add-wish-form.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-wish-form.component.css */
      "./src/app/wishlist/add-wish-form/add-wish-form.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], AddWishFormComponent);
    /***/
  },

  /***/
  "./src/app/wishlist/add-wishlist-form/add-wishlist-form.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/wishlist/add-wishlist-form/add-wishlist-form.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishlistAddWishlistFormAddWishlistFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3QvYWRkLXdpc2hsaXN0LWZvcm0vYWRkLXdpc2hsaXN0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QixFQUFFLFVBQVU7QUFDNUM7O0FBRUE7RUFDRSw4QkFBOEIsRUFBRSxRQUFRO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvd2lzaGxpc3QvYWRkLXdpc2hsaXN0LWZvcm0vYWRkLXdpc2hsaXN0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/wishlist/add-wishlist-form/add-wishlist-form.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/wishlist/add-wishlist-form/add-wishlist-form.component.ts ***!
    \***************************************************************************/

  /*! exports provided: AddWishlistFormComponent */

  /***/
  function srcAppWishlistAddWishlistFormAddWishlistFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddWishlistFormComponent", function () {
      return AddWishlistFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_wishlist_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/wishlist.model */
    "./src/app/models/wishlist.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");

    var AddWishlistFormComponent =
    /*#__PURE__*/
    function () {
      function AddWishlistFormComponent(fb) {
        _classCallCheck(this, AddWishlistFormComponent);

        this.fb = fb;
        this.modifiedWishlist = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AddWishlistFormComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var formModel = ramda__WEBPACK_IMPORTED_MODULE_4__["clone"](this.wishlistForm.value);
          var w = {
            title: formModel.title
          };
          this.modifiedWishlist.emit(w);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.wishlist) {
            this.wishlistForm = this.fb.group({
              title: [this.wishlist.title, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
          } else {
            this.wishlistForm = this.fb.group({
              title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.formWishlistTitleInput.nativeElement.focus();
        }
      }, {
        key: "cancelFormWishlist",
        value: function cancelFormWishlist() {
          this.modifiedWishlist.emit(null);
        }
      }]);

      return AddWishlistFormComponent;
    }();

    AddWishlistFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_wishlist_model__WEBPACK_IMPORTED_MODULE_2__["Wishlist"])], AddWishlistFormComponent.prototype, "wishlist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddWishlistFormComponent.prototype, "modifiedWishlist", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formWishlistTitleInput', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddWishlistFormComponent.prototype, "formWishlistTitleInput", void 0);
    AddWishlistFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-wishlist-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-wishlist-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/add-wishlist-form/add-wishlist-form.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-wishlist-form.component.css */
      "./src/app/wishlist/add-wishlist-form/add-wishlist-form.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], AddWishlistFormComponent);
    /***/
  },

  /***/
  "./src/app/wishlist/edit-wish-form/edit-wish-form.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/wishlist/edit-wish-form/edit-wish-form.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishlistEditWishFormEditWishFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n}\n\ntextarea {\n  resize: none;\n}\n\n.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n\n.btn-file input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  min-width: 100%;\n  min-height: 100%;\n  font-size: 100px;\n  text-align: right;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  outline: none;\n  background: white;\n  cursor: inherit;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3QvZWRpdC13aXNoLWZvcm0vZWRpdC13aXNoLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QixFQUFFLFVBQVU7QUFDNUM7O0FBRUE7RUFDRSw4QkFBOEIsRUFBRSxRQUFRO0FBQzFDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC93aXNobGlzdC9lZGl0LXdpc2gtZm9ybS9lZGl0LXdpc2gtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXZhbGlkW3JlcXVpcmVkXSwgLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyAvKiBncmVlbiAqL1xufVxuXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IC8qIHJlZCAqL1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmJ0bi1maWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYnRuLWZpbGUgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICBvcGFjaXR5OiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY3Vyc29yOiBpbmhlcml0O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/wishlist/edit-wish-form/edit-wish-form.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/wishlist/edit-wish-form/edit-wish-form.component.ts ***!
    \*********************************************************************/

  /*! exports provided: EditWishForm */

  /***/
  function srcAppWishlistEditWishFormEditWishFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditWishForm", function () {
      return EditWishForm;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_wish_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/wish.model */
    "./src/app/models/wish.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");
    /* harmony import */


    var _models_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/upload */
    "./src/app/models/upload.ts");
    /* harmony import */


    var _services_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/upload-service */
    "./src/app/services/upload-service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var EditWishForm =
    /*#__PURE__*/
    function () {
      function EditWishForm(fb, uploadService, sanitizer) {
        _classCallCheck(this, EditWishForm);

        this.fb = fb;
        this.uploadService = uploadService;
        this.sanitizer = sanitizer;
        this.modifiedWish = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.uploadPercent = uploadService.uploadPercent;
      }

      _createClass(EditWishForm, [{
        key: "uploadSingle",
        value: function uploadSingle() {
          this.currentUpload = new _models_upload__WEBPACK_IMPORTED_MODULE_5__["Upload"](this.selectedFile);
          this.uploadService.pushUpload(this.currentUpload, this.wish);
        }
      }, {
        key: "detectFiles",
        value: function detectFiles(event) {
          var _this4 = this;

          this.selectedFile = event.target.files.item(0);
          var fr = new FileReader();

          fr.onloadend = function (event) {
            _this4.imgUrl = event.target['result'];
          };

          fr.readAsDataURL(this.selectedFile);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var formModel = ramda__WEBPACK_IMPORTED_MODULE_4__["clone"](this.addWishForm.value);
          var w = {
            id: null,
            image: this.imgUrl,
            url: formModel.url,
            value: formModel.value,
            title: formModel.title,
            description: formModel.description
          };

          if (this.wish) {
            w.id = this.wish.id;
          }

          this.modifiedWish.emit(w);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.wish) {
            this.addWishForm = this.fb.group({
              url: [this.wish.url, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              value: [this.wish.value, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              title: [this.wish.title],
              description: [this.wish.description]
            });
            this.imgUrl = this.wish.image;
          } else {
            this.addWishForm = this.fb.group({
              url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              value: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              title: [''],
              description: ['']
            });
            this.imgUrl = null;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.formWishUrlInput.nativeElement.focus();
        }
      }, {
        key: "cancelFormWish",
        value: function cancelFormWish() {
          this.modifiedWish.emit(null);
        }
      }]);

      return EditWishForm;
    }();

    EditWishForm.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_wish_model__WEBPACK_IMPORTED_MODULE_2__["Wish"])], EditWishForm.prototype, "wish", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], EditWishForm.prototype, "modifiedWish", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formWishUrlInput', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], EditWishForm.prototype, "formWishUrlInput", void 0);
    EditWishForm = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-wish-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-wish-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/edit-wish-form/edit-wish-form.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-wish-form.component.css */
      "./src/app/wishlist/edit-wish-form/edit-wish-form.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]])], EditWishForm);
    /***/
  },

  /***/
  "./src/app/wishlist/wish/add-participant-form/add-participant-form.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/wishlist/wish/add-participant-form/add-participant-form.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishlistWishAddParticipantFormAddParticipantFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442; /* red */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3Qvd2lzaC9hZGQtcGFydGljaXBhbnQtZm9ybS9hZGQtcGFydGljaXBhbnQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCLEVBQUUsVUFBVTtBQUM1Qzs7QUFFQTtFQUNFLDhCQUE4QixFQUFFLFFBQVE7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC93aXNobGlzdC93aXNoL2FkZC1wYXJ0aWNpcGFudC1mb3JtL2FkZC1wYXJ0aWNpcGFudC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG59XG5cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/wishlist/wish/add-participant-form/add-participant-form.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/wishlist/wish/add-participant-form/add-participant-form.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AddParticipantFormComponent */

  /***/
  function srcAppWishlistWishAddParticipantFormAddParticipantFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddParticipantFormComponent", function () {
      return AddParticipantFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_participant_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../models/participant.model */
    "./src/app/models/participant.model.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ramda */
    "./node_modules/ramda/es/index.js");

    var AddParticipantFormComponent =
    /*#__PURE__*/
    function () {
      function AddParticipantFormComponent(fb) {
        _classCallCheck(this, AddParticipantFormComponent);

        this.fb = fb;
        this.modifiedParticipant = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AddParticipantFormComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var formModel = ramda__WEBPACK_IMPORTED_MODULE_4__["clone"](this.addParticipantForm.value);
          var p = {
            id: this.participant.id,
            name: formModel.name,
            amount: formModel.amount
          };
          this.modifiedParticipant.emit(p);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.participant) {
            this.addParticipantForm = this.fb.group({
              name: [this.participant.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
              amount: [this.participant.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, this.maxValueValidator(this.maxValue)]]
            });
          }
        }
      }, {
        key: "maxValueValidator",
        value: function maxValueValidator(maxValue) {
          return function (control) {
            var exceeded = control.value > maxValue;
            return exceeded ? {
              'exceeded': {
                value: control.value
              }
            } : null;
          };
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.formParticipantNameInput.nativeElement.focus();
        }
      }, {
        key: "cancelFormParticipant",
        value: function cancelFormParticipant() {
          this.modifiedParticipant.emit(null);
        }
      }, {
        key: "name",
        get: function get() {
          return this.addParticipantForm.get('name');
        }
      }, {
        key: "amount",
        get: function get() {
          return this.addParticipantForm.get('amount');
        }
      }]);

      return AddParticipantFormComponent;
    }();

    AddParticipantFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_participant_model__WEBPACK_IMPORTED_MODULE_2__["Participant"])], AddParticipantFormComponent.prototype, "participant", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)], AddParticipantFormComponent.prototype, "maxValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], AddParticipantFormComponent.prototype, "modifiedParticipant", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('formParticipantNameInput', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddParticipantFormComponent.prototype, "formParticipantNameInput", void 0);
    AddParticipantFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-participant-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-participant-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wish/add-participant-form/add-participant-form.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-participant-form.component.css */
      "./src/app/wishlist/wish/add-participant-form/add-participant-form.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], AddParticipantFormComponent);
    /***/
  },

  /***/
  "./src/app/wishlist/wish/wish.component.css":
  /*!**************************************************!*\
    !*** ./src/app/wishlist/wish/wish.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishlistWishWishComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  /*width: 20rem;*/\n  margin-top: 1rem;\n}\n\nngb-progressbar {\n  width: 6rem;\n}\n\n.img-present {\n  position: absolute;\n  right: 1rem;\n  top: -1rem;\n  height: 5rem;\n}\n\n.img-pin {\n  position: absolute;\n  right: -2rem;\n  top: -3rem;\n  height: 4rem;\n}\n\n.card-body-participant {\n  background-color: beige;\n}\n\n.card-body-participant .list-group-item {\n  background-color: beige;\n}\n\n.progress-bar-content {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  color: black;\n}\n\n.participant-item {\n  padding-left: 0rem;\n  padding-right: 0rem;\n}\n\n.bg-color-grey {\n  background-color: #f5f5f5;\n}\n\n.bg-blue-grad {\n  background: -webkit-gradient(linear, left top, right top, from(#79bac5), to(#f8f9fa));\n  background: linear-gradient(90deg, #79bac5, #f8f9fa);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3Qvd2lzaC93aXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUZBQW9EO0VBQXBELG9EQUFvRDtBQUN0RCIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0L3dpc2gvd2lzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAvKndpZHRoOiAyMHJlbTsqL1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5uZ2ItcHJvZ3Jlc3NiYXIge1xuICB3aWR0aDogNnJlbTtcbn1cblxuLmltZy1wcmVzZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXJlbTtcbiAgdG9wOiAtMXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xufVxuXG4uaW1nLXBpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0ycmVtO1xuICB0b3A6IC0zcmVtO1xuICBoZWlnaHQ6IDRyZW07XG59XG5cbi5jYXJkLWJvZHktcGFydGljaXBhbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbn1cblxuLmNhcmQtYm9keS1wYXJ0aWNpcGFudCAubGlzdC1ncm91cC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG59XG5cbi5wcm9ncmVzcy1iYXItY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBhcnRpY2lwYW50LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDByZW07XG4gIHBhZGRpbmctcmlnaHQ6IDByZW07XG59XG5cbi5iZy1jb2xvci1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmJnLWJsdWUtZ3JhZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc5YmFjNSwgI2Y4ZjlmYSk7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/wishlist/wish/wish.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/wishlist/wish/wish.component.ts ***!
    \*************************************************/

  /*! exports provided: WishComponent */

  /***/
  function srcAppWishlistWishWishComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishComponent", function () {
      return WishComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_wish_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/wish.model */
    "./src/app/models/wish.model.ts");
    /* harmony import */


    var _models_participant_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/participant.model */
    "./src/app/models/participant.model.ts");
    /* harmony import */


    var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/wishlist.service */
    "./src/app/services/wishlist.service.ts");
    /* harmony import */


    var _services_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/edit.service */
    "./src/app/services/edit.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var WishComponent =
    /*#__PURE__*/
    function () {
      function WishComponent(modalService, wishlistService, editService) {
        _classCallCheck(this, WishComponent);

        this.modalService = modalService;
        this.wishlistService = wishlistService;
        this.editService = editService;
      }

      _createClass(WishComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPercent",
        value: function getPercent() {
          return Math.round(this.wish.currentValue / this.wish.value * 100);
        }
      }, {
        key: "isGiven",
        value: function isGiven() {
          return this.wish.value === this.wish.currentValue;
        }
      }, {
        key: "deleteWish",
        value: function deleteWish() {
          this.wishlistService.modelDeleteWish({
            id: this.wish.id
          });
        }
      }, {
        key: "modifyWish",
        value: function modifyWish(wishInfo) {
          if (wishInfo) {
            wishInfo.id = this.wish.id;
            this.wishlistService.modelUpdateWish(wishInfo);
          }

          this.editService.stopEditing();
        }
      }, {
        key: "editWish",
        value: function editWish() {
          this.editService.startEditing(this.wish);
        }
      }, {
        key: "onEditParticipant",
        value: function onEditParticipant(participant) {
          this.editService.startEditing(participant);
        }
      }, {
        key: "editParticipant",
        value: function editParticipant(participantInfo) {
          if (participantInfo) {
            participantInfo.wishId = this.wish.id;
            this.wishlistService.modelUpdateParticipant(participantInfo);
          }

          this.editService.stopEditing();
        }
      }, {
        key: "deleteParticipant",
        value: function deleteParticipant(participant) {
          this.wishlistService.modelDeleteParticipant({
            wishId: this.wish.id,
            id: participant.id
          });
        }
      }, {
        key: "createParticipant",
        value: function createParticipant(participantInfo) {
          if (participantInfo) {
            participantInfo.wishId = this.wish.id;
            this.wishlistService.modelAddParticipant(participantInfo);
          }

          this.newParticipant = null;
          this.editService.stopEditing();
        }
      }, {
        key: "createNewParticipant",
        value: function createNewParticipant() {
          var participant = new _models_participant_model__WEBPACK_IMPORTED_MODULE_3__["Participant"]();
          participant.amount = this.wish.value - this.wish.currentValue;
          this.editService.startEditing(participant);
          this.newParticipant = participant;
        }
      }, {
        key: "getMaxValue",
        value: function getMaxValue(participant) {
          var currentAmount = participant ? participant.amount : 0;
          return this.wish.value - this.wish.currentValue + currentAmount;
        }
      }]);

      return WishComponent;
    }();

    WishComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
      }, {
        type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"]
      }, {
        type: _services_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_wish_model__WEBPACK_IMPORTED_MODULE_2__["Wish"])], WishComponent.prototype, "wish", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)], WishComponent.prototype, "adminAccount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editWishTitleInput', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], WishComponent.prototype, "editWishTitleInput", void 0);
    WishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wish',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wish.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wish/wish.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wish.component.css */
      "./src/app/wishlist/wish/wish.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _services_wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"], _services_edit_service__WEBPACK_IMPORTED_MODULE_5__["EditService"]])], WishComponent);
    /***/
  },

  /***/
  "./src/app/wishlist/wishlist.component.css":
  /*!*************************************************!*\
    !*** ./src/app/wishlist/wishlist.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWishlistWishlistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-body-wishlist {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(white), color-stop(300%, #991155));\n  background-image: linear-gradient(to top, white 0%, #991155 300%);\n}\n\n.card-new-wish > .card-body {\n  background-color: beige;\n}\n\n.img-add {\n  position: absolute;\n  right: -1rem;\n  top: -1rem;\n  height: 3rem;\n}\n\n.bg-image-full {\n  background: no-repeat center center scroll;\n  background-size: cover;\n  -o-background-size: cover;\n  background-image: url('bg.jpg')\n}\n\n.bg-color-grey {\n  background-color: #f5f5f5;\n}\n\n.badge-gesamtbetrag {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLHlHQUFpRTtFQUFqRSxpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQ0FBMEM7RUFHMUMsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ib2R5LXdpc2hsaXN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoYm90dG9tLCB3aGl0ZSAwJSwgIzk5MTE1NSAzMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoYm90dG9tLCB3aGl0ZSAwJSwgIzk5MTE1NSAzMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgd2hpdGUgMCUsICM5OTExNTUgMzAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHdoaXRlIDAlLCAjOTkxMTU1IDMwMCUpO1xufVxuXG4uY2FyZC1uZXctd2lzaCA+IC5jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbn1cblxuLmltZy1hZGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMXJlbTtcbiAgdG9wOiAtMXJlbTtcbiAgaGVpZ2h0OiAzcmVtO1xufVxuXG4uYmctaW1hZ2UtZnVsbCB7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIHNjcm9sbDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9iZy5qcGcnKVxufVxuXG4uYmctY29sb3ItZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5iYWRnZS1nZXNhbXRiZXRyYWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/wishlist/wishlist.component.ts":
  /*!************************************************!*\
    !*** ./src/app/wishlist/wishlist.component.ts ***!
    \************************************************/

  /*! exports provided: WishlistComponent */

  /***/
  function srcAppWishlistWishlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishlistComponent", function () {
      return WishlistComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/wishlist.service */
    "./src/app/services/wishlist.service.ts");
    /* harmony import */


    var _services_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/edit.service */
    "./src/app/services/edit.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_new_wish_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/new-wish.model */
    "./src/app/models/new-wish.model.ts");

    var WishlistComponent =
    /*#__PURE__*/
    function () {
      function WishlistComponent(wishlistService, editService, router, platformLocation, route) {
        _classCallCheck(this, WishlistComponent);

        this.wishlistService = wishlistService;
        this.editService = editService;
        this.router = router;
        this.platformLocation = platformLocation;
        this.route = route;
      }

      _createClass(WishlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.root = this.wishlistService.getRoot();
          this.route.params.subscribe(function (params) {
            // try to load a wishlist
            var id_password = params['id_password'];
            var id = null;
            var password = null;

            if (id_password.length > 1) {
              if (id_password.indexOf('-') > 0) {
                var match = id_password.match(/(.*)-(.*)/);
                id = match[1];
                password = match[2];
              } else {
                id = id_password;
              }
            }

            _this5.wishlistService.loadWishlist(id, password);
          });
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.wishlistService.isAdminUser();
        }
      }, {
        key: "modifyWishlist",
        value: function modifyWishlist(editedWishlist) {
          if (editedWishlist) {// TODO
            // this.wishlist.title = editedWishlist.title;
          }

          this.editService.stopEditing();
        }
      }, {
        key: "editWishlist",
        value: function editWishlist() {
          this.editService.startEditing(this.root.wishlist);
        }
      }, {
        key: "onAddWishFinished",
        value: function onAddWishFinished(wishInfo) {
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
      }, {
        key: "onEditWishFinished",
        value: function onEditWishFinished(wishInfo) {
          if (wishInfo) {
            this.wishlistService.modelAddWish(wishInfo);
          }

          this.editService.stopEditing();
        }
      }, {
        key: "createNewWish",
        value: function createNewWish() {
          this.newWish = new _models_new_wish_model__WEBPACK_IMPORTED_MODULE_6__["NewWish"]();
          this.editService.startEditing(this.newWish);
        }
      }, {
        key: "showLinks",
        value: function showLinks() {
          this.router.navigate(['share']);
        }
      }]);

      return WishlistComponent;
    }();

    WishlistComponent.ctorParameters = function () {
      return [{
        type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"]
      }, {
        type: _services_edit_service__WEBPACK_IMPORTED_MODULE_3__["EditService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wishlist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wishlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wishlist.component.css */
      "./src/app/wishlist/wishlist.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"], _services_edit_service__WEBPACK_IMPORTED_MODULE_3__["EditService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["PlatformLocation"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], WishlistComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyAeoDyKBrApL8B6DVfi9UNtvbWfXjKVy58',
        authDomain: 'wishlist-pid.firebaseapp.com',
        databaseURL: 'https://wishlist-pid.firebaseio.com',
        projectId: 'wishlist-pid',
        storageBucket: 'wishlist-pid.appspot.com',
        messagingSenderId: '357853674194'
      },
      linkpreview: {
        key: '5aaea580bd5b1b971cc0c369b74fa335120701efa2369'
      }
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/RalfWalk/Projects/private/wishlist/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map