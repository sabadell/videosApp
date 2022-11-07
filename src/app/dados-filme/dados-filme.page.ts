import { IFilme } from './../models/ifilme.models';
import { Component, OnInit } from '@angular/core';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {
  filme: IFilme;
  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme=this.dadosService.pegarDados('filme');
    console.log('dados filme',this.filme);

  }

}
