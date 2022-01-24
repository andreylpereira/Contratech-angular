import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ListWorkComponent } from 'src/app/pages/list-work/list-work.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { ReportComponent } from 'src/app/pages/report/report.component';
import { TableComponent } from 'src/app/pages/table/table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'obras',
    component: ListWorkComponent
  },
  {
    path: 'obras/1/etapas',
    component: TableComponent
  }
  ,
  {
    path: 'obras/1/relatorio',
    component: ReportComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
