import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import{ModalPage} from '../modal/modal.page';
@Component({
  selector: 'app-mural',
  templateUrl: './mural.page.html',
  styleUrls: ['./mural.page.scss'],
})
export class MuralPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  async mostrarModal(nombre, profesion) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        nombre: nombre,
        profesion: profesion
      }
    });
    await modal.present();

  }

}
