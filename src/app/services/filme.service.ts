import { IListaFilmes } from './../models/ifilmeapi.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { map,catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FilmeService {
lingua='pt-BR';
region='BR';
private apiURL ='https://api.themoviedb.org/3';
private key='?api_key=3e3d80dd8fc194e868adb67fcc0c8c87';
  constructor( private http: HttpClient,private toastController: ToastController) { }

  buscarFilme(buscar: string): Observable<IListaFilmes>
  {
      const url=`${this.apiURL}/search/movie${this.key}&language=${this.lingua}&region=${this.region}&query=${buscar}`;
      return this.http.get<IListaFilmes>(url).pipe(
        map(retorno=>retorno),
          catchError(erro=>this.exibirErro(erro))
      );
  }


    async exibirErro(erro) {
      const toast = await this.toastController.create({
        message: 'Erro ao consultar a Api',
        duration: 2000,
        position: 'middle',
        color:'success'
      });

      await toast.present();
      return null;
    }

}
