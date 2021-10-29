import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _storage : Storage;
  email: string = null;

  constructor( private storage: Storage ) {
    this.init();
   }
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  login( email:string, password: string) {


    if( email == 'mario@gmail.com' && password == '1234')
    {
      this.guardarUsuario(email);
      return true;
    }
    else {
      this.email = null;
      this.storage.clear();
      return false;
    }
  }
  async guardarUsuario (email: string) {
    this.email = email;
    await this.storage.set('email', email);
  }
  
}
