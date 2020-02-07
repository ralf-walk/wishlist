import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/database";
import {Upload} from "../models/upload";
import {AngularFireStorage} from "@angular/fire/storage";
import {Wish} from "../models/wish.model";
import {finalize, last, mergeMap} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable()
export class UploadService {

  private _uploadPercent: Observable<number>;
  private basePath: string = '/uploads';

  constructor(private db: AngularFireDatabase, private afs: AngularFirestore, private storage: AngularFireStorage) {
  }

  get uploadPercent() {
    return this._uploadPercent;
  }

  pushUpload(upload: Upload, wishlistId: string, wishId: string): Observable<string> {

    const filePath = `${this.basePath}/${wishlistId}/${wishId}/${upload.file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = fileRef.put(upload.file);

    // observe percentage changes
    this._uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    return task.snapshotChanges().pipe(
      last(),
      mergeMap(() => fileRef.getDownloadURL())
    );
  }
}
