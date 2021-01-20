import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  createUserWithEmailAndPasword(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private firestore: AngularFirestore,
    public firebaseAuth: AngularFireAuth) {
  }

  /**
   * Add data to collection
   * @param collection
   * @param data
   */
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
  convertListDataFromFireBase(data) {
    return data.map((item) => {
      return { id: item.payload.doc.id, ...item?.payload?.doc?.data() };
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
