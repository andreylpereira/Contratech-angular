import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingModule } from 'src/app/pages/routing.modules';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
