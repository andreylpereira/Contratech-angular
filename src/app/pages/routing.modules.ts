import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../services/auth-guard/auth-guard.service';

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
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cadastrar',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'obras',
    component: ListWorkComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'obras/:id/etapas',
    component: TableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'obras/:id/relatorio',
    component: ReportComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
