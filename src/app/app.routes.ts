import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
{
    path:'',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
},
{
    path:'home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
},
{
    path:'about',
    loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)  
},
{
    path:'contact',
    loadComponent: () => import('./contact/contact.component').then(c => c.ContactComponent)
}
];
export const appRouterProviders = [provideRouter(routes)];
// Compare this snippet from src/app/app.component.html:
