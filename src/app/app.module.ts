/* Modules */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from 'src/app/pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { registerLocaleData } from '@angular/common';

/* Components */
import { AppComponent } from './app.component';

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PagesModule,
  ],
  providers:  [
    {
      provide: LOCALE_ID,
      useValue: "pt"
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
],
  bootstrap: [AppComponent],
})
export class AppModule {}
