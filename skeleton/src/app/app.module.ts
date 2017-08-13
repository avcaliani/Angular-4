import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; /* Forms Module */
import { RoutingModule } from './app.routes'; /* Router Module */

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { Error404Component } from './pages/error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    /* Forms Module, you need this to manage your forms */
    FormsModule,
    /* Router Module */
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
