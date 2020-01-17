import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "@angular/fire/database";
import {Upload} from "../models/upload";
import {AngularFireStorage} from "@angular/fire/storage";
import {Wish} from "../models/wish.model";
import {finalize} from "rxjs/operators";
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

  pushUpload(upload: Upload, wish: Wish) {

    const filePath = `${this.basePath}/${upload.file.name}`;
    console.log('BAUM', filePath);
    const fileRef = this.storage.ref(filePath);
    const task = fileRef.put(upload.file);

    // observe percentage changes
    this._uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        const downloadUrl = fileRef.getDownloadURL();
        downloadUrl.subscribe(url => {
          console.log('URL', url)
          wish.image = url
        });
      })
    ).subscribe();
  }
}
