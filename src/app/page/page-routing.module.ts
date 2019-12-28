import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePage } from './page.page';

const routes: Routes = [
  {
    path: 'page',
    component: PagePage,
    loadChildren: './page/page.module#PagePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePageRoutingModule {}
