import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";
import { ServerDoc } from "../models/Models";

import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  offline: boolean = false;
  online: boolean = true;
  mantainace: boolean = false;

  // docRef: Observable<ServerDoc[]>;

  constructor(private afs: AngularFirestore) {

    // this.docRef = afs.collection("minecraftServerStats/devserver").snapshotChanges().pipe(map(actions => actions.map(a => {
    //   const data = a.payload.doc.data() as ServerDoc;
    //   data.id = a.payload.doc.id;
    //   return data;
    // })))
  }

  setOnline() {
    this.offline = false;
    this.online = true;
    this.mantainace = false;
  }

  setMantainace() {
    this.offline = false;
    this.online = false;
    this.mantainace = true;
  }

  setOffline() {
    this.offline = true;
    this.online = false;
    this.mantainace = false;
  }
}
