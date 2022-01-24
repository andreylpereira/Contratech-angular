import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Routing */
import { RoutingModule } from 'src/app/pages/routing.modules';

/* Modules */
import { MaterialModule } from 'src/app/material/material/material.module';

/* Pages */
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListWorkComponent } from './list-work/list-work.component';
import { TableComponent } from './table/table.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ListWorkComponent,
    TableComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule
  ]
})
export class PagesModule { }
