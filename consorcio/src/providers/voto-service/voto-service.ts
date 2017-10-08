import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Voto } from "../../clases/voto";


@Injectable()
export class VotoServiceProvider {
  public votos:FirebaseListObservable<Voto[]>;

  constructor(private db:AngularFireDatabase, private auth:AngularFireAuth) {
      this.votos = this.getVotosLista();
  }

  getVotosLista(){
    this.votos = this.db.list('/votacion') as FirebaseListObservable<Voto[]>;
    return this.votos;
  }

  guardarVoto(voto:Voto):void{
    if (voto != null && voto != undefined) {
      this.votos.push(voto);
    }else{
      return;
    }


  }

}
