import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AQuedaPage } from './a-queda.page';

const routes: Routes = [
  {
    path: '',
    component: AQuedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AQuedaPageRoutingModule {}
