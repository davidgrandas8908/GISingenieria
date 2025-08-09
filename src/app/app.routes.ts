import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { ServicesComponent } from './components/services/services';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' }
];
