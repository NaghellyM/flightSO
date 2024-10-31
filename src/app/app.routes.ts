import { Routes } from '@angular/router';
import { BiosComponent } from './components/bios/bios.component';
import { LoginComponent } from './components/login/login.component';
import { DeskComponent } from './components/desk/desk.component';
export const routes: Routes = [
  {
    path: '',
    component: BiosComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'desk',
    component: DeskComponent,
  },
];
