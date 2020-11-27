import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule),
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then( m => m.PagePageModule)
  },
  {
    path: 'call',
    loadChildren: () => import('./call/call.module').then( m => m.CallPageModule)
  },
  {
    path: 'connecting',
    loadChildren: () => import('./connecting/connecting.module').then( m => m.ConnectingPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
