import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  usuario={
    email: 'mario@gmail.com',
    password: '1234',
  }



  constructor(private usuarioService: UsuarioService, private navCtrl: NavController ) { }

  ngOnInit() {
  }
  login( fLogin: NgForm ){

    if( this.usuarioService.login(this.usuario.email, this.usuario.password))
    {
      this.navCtrl.navigateRoot( 'inicio',{animated: true } );
    }
    else(
      {

      }
    )
    
  }
}
