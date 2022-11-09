import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/genero.models';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  lingua: 'pt-BR';
  private apiURL ='https://api.themoviedb.org/3';
  private key='?api_key=3e3d80dd8fc194e868adb67fcc0c8c87';
  constructor(private http: HttpClient,private toastController: ToastController) { }

  buscarGeneros(): Observable<IListaGenero>
  {
      const url=`${this.apiURL}/genre/movie/list${this.key}&language=${this.lingua}`;
      return this.http.get<IListaGenero>(url).pipe(
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
