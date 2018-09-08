import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'client', loadChildren: './client/client.module#ClientModule', canLoad: [ AppGuard ] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad: [ AppGuard ] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
