import { Routes, RouterModule } from '@angular/router'; /* Router Module */

/* Import just components that will be routed, isolated components don't need to be here */
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { Error404Component } from './pages/error-404/error-404.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'form',
        component: FormComponent
    },
    {
        path: '**',
        component: Error404Component
    }
];

export const RoutingModule = RouterModule.forRoot(routes);