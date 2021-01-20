import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList: AngularFireList<any>;
  backgroundImage: string = 'assets/img/background.jpg';

  constructor( private firebaseDatabase: AngularFireDatabase, private storage: AngularFireStorage) { }
  getImageDetailList(name: string): AngularFireList<any> {
    return this.firebaseDatabase.list(name);
  }

  insertImageDetails(imageDetails) {
    this.imageDetailList.push(imageDetails);
  }

  updateBackground(img: any): void {
    if (img) {
      this.storage.upload('background', img);
    }
  }

  getUrlImg(path: string): Observable<any> {
    return this.storage.ref(path).getDownloadURL();
  }
  updateImage(img: any, callback): void {
    if (img) {
      this.storage.upload(img.name, img).then(() => {
        callback();
      });
    } else {
      callback();
    }
  }

  updateListImage(imgList: any, callback) {
    if (imgList && imgList.length > 0) {
      this.storage.upload(imgList[0].name, imgList[0]).then(() => {
          this.storage.upload(imgList[1].name, imgList[1]).then(() => {
            callback();
          })
      });
    } else {
      callback();
    }
  }
}
