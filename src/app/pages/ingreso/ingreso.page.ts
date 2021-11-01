import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BasedatosService } from '../../services/basedatos.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ToastController, AlertController } from '@ionic/angular';

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



  constructor(private baseDatos: BasedatosService,
    private navCtrl: NavController, 
    private storage: Storage,
    public alertController: AlertController,
    public toastController: ToastController ) { }

  ngOnInit() {} 



  login( fLogin: NgForm ){

    if( this.baseDatos.login(this.usuario.email, this.usuario.password))
    {
      this.navCtrl.navigateRoot( 'inicio',{animated: true } );
      this.presentToast("Bienvenido " + this.usuario.email);
    }
    else{
        this.presentToast("Error de ingreso.");
        this.navCtrl.navigateRoot( 'ingreso',{animated: true } );
      
    }

    
  }

 
  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
}
