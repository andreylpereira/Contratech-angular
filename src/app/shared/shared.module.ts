import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { MaterialModule } from 'src/app/material/material/material.module';

/* Components */
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { BreadcrumbComponent } from 'src/app/shared/breadcrumb/breadcrumb.component';

/* Routing */
import { RoutingModule } from 'src/app/pages/routing.modules';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    BreadcrumbComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule
  ]
})
export class SharedModule { }
