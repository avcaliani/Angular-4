import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; /* Forms Module */
import { RoutingModule } from './app.routes'; /* Router Module */

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { FormComponent } from './view/form/form.component';
import { Error404Component } from './view/error-404/error-404.component';
import { PipesComponent } from './view/includes/pipes/pipes.component';
import { SortPipe } from './view/includes/pipes/pipes.sort';
import { ListComponent } from './view/includes/list/list.component';
import { RegisterComponent } from './view/includes/register/register.component';
import { RegisterLanguageComponent } from './view/includes/register-language/register-language.component';
import { ConverterComponent } from './view/includes/converter/converter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    Error404Component,
    SortPipe /* Have to be declared before his component */,
    PipesComponent,
    ListComponent,
    RegisterComponent,
    RegisterLanguageComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    /* Forms Module, you need this to manage your forms */
    FormsModule,
    ReactiveFormsModule,
    /* Router Module */
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
