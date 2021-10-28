import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string; 
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componentes: Componente[] = [

    {
      icon: 'person-outline',
      name: 'Ingreso',
      redirectTo: '/ingreso'
    },
    {
      icon: 'newspaper-outline',
      name: 'Mural',
      redirectTo: '/mural'
    },
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirectTo: '/inicio'
    },
    {
      icon: 'home-outline',
      name: 'Noticias',
      redirectTo: '/noticia'
    },
   ];
  constructor() {}
}
