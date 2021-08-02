import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Poema } from '../domain/poema';

@Injectable({
  providedIn: 'root'
})
export class PeomasService {

  constructor(public afs: AngularFirestore) { }

  save(poema: Poema){
    //Hacemos una refencia 
    const refContactos = this.afs.collection("poema");
    
    if (poema.uid == null) {
      poema.uid = this.afs.createId();
      poema.activo == true;
    }  
    refContactos.doc(poema.uid).set(Object.assign({}, poema));
  }

  getPoemas(): Observable <any[]> {
    return this.afs.collection("poema").valueChanges();

  }
}
