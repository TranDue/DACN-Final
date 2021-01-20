import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private firestore: AngularFirestore) { }
  updateHomeConfigData(collection: string, data) {
    return this.firestore.collection(collection).doc('home-config').set(data);
  }

  addData(collection: string, data) {
    return this.firestore.collection(collection).add(data);
  }

  getDatas(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  deleteData(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).delete();
  }

  getDateBaseId(collection: string, id: string) {
    return this.firestore.collection(collection).doc(id).snapshotChanges();
  }

  updateDataBaseId(collection: string, id: string, data: any) {
    return this.firestore.collection(collection).doc(id).set(data);
  }
}
