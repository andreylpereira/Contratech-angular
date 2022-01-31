import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Routing */
import { RoutingModule } from 'src/app/pages/routing.modules';

/* Modules */
import { MaterialModule } from 'src/app/material/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

/* Pages */
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListWorkComponent } from './list-work/list-work.component';
import { TableComponent } from './table/table.component';
import { ReportComponent } from './report/report.component';
import { ModalRenameWorkComponent } from './list-work/modal-rename-work/modal-rename-work.component';
import { ModalAddWorkComponent } from './list-work/modal-add-work/modal-add-work.component';
import { JobComponent } from './table/job/job.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ListWorkComponent,
    TableComponent,
    ReportComponent,
    ModalRenameWorkComponent,
    ModalAddWorkComponent,
    JobComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
