import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {

  noticias: Article[]=[];
  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines()
      .subscribe( resp => {
        console.log('noticias', resp  );
        this.noticias.push(...resp.articles);
      });
  }

}
