import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor( private storage: Storage ) { }

  login( email:string, password: string) {

    const data = {email: email, password: password};

    if( email == 'mario@gmail.com' && password == '1234')
    {
      this.guardarToken('aa12328348234rjgiur93');
      return true;
    }
    else {
      this.token = null;
      this.storage.clear();
      return false;
    }
  }
  async guardarToken (token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }
}
