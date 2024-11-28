import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { BiosComponent } from './components/bios/bios.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path:'bios',
    title:'Bios',
    component: BiosComponent
  }
];
