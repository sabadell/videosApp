import { IListaFilmes } from './../models/ifilmeapi.models';
import { IFilme } from './../models/ifilme.models';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DadosService } from '../services/dados.service';
import { Router } from '@angular/router';
import { FilmeService } from '../services/filme.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titulo='Filmes';
  listaFilme: IListaFilmes;
  listaVideos: IFilme[] = [
    {
      nome: 'Aterrorizante 2 (2022)',
      lancamento: '06/10/2022',
      duracao: '2h 18m',
      classificacao: 76,
      generos: ['Terror', 'Thriller'],
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/b6IRp6Pl2Fsq37r9jFhGoLtaqHm.jpg'
    },
    {
      nome: 'A Queda (2022)',
      lancamento: '29/09/2022',
      duracao: '1h 47m',
      classificacao: 80,
      generos: ['Thriller'],
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/53AC95HTGvFYA8ZRkGgeYo7lBRo.jpg',
      pagina:'/a-queda'
    }
    ,
    {
      nome: 'Pinóquio (2022)',
      lancamento: '08/09/2022',
      duracao: '1h 51m',
      classificacao: 67,
      generos: ['Fantasia', 'Aventura', 'Família'],
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hVPMjz4GXxxS4dMcaxTComi3KzR.jpg',
      pagina:'/pinoquio'
    }
    ,
    {
      nome: 'Nada de Novo no Front (2022)',
      lancamento: '28/10/2022',
      duracao: '2h 27m',
      classificacao: 79,
      generos: ['Ação', 'Drama', 'História', 'Guerra'],
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qmcKs0Aoft7MBdBoj1haZyPRgM2.jpg'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public route: Router

    ) {}

    buscarFilme(evento: any)
    {

      const busca=evento.target.value;
      if(busca && busca.trim()!=='')
      {
          this.filmeService.buscarFilme(busca).subscribe((data) => {
            console.log('Data received', data);
            this.listaFilme=data;
        });
      }

    }

    exibirFilme(filme: IFilme)
    {
        this.dadosService.guardarDados('filme',filme);
        this.route.navigateByUrl('/dados-filme');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message:'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
             console.log('Alert canceled');
          },
        },
        {
          text: 'Sim favoritar',
          role: 'confirm',
          handler: () => {this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();

  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme favoritado!',
      duration: 1500,
      position: 'bottom',
      color:'success'

    });

    await toast.present();
  }
}
