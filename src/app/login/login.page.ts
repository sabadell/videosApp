import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;
  constructor(private toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }
  login()
  {
     if(this.email==='elvis@datacampos.com' && this.senha==='admin')
     {
         this.route.navigateByUrl('/tabs/tab1');
         this.presentToast('Seja bem vindo', 'success');
     }
     else
     {
      this.presentToast('Erro Usuário ou senha inválido', 'danger');
     }
  }

  async presentToast(texto :string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500,
      position: 'bottom',
      color: cor
    });

    await toast.present();
  }

}
