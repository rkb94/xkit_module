import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectingPage } from './connecting.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectingPageRoutingModule {}
