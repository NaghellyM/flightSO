import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CalculatorComponent } from './home/calculator/calculator.component';
import { NotesComponent } from './home/notes/notes.component';
import { ClockComponent } from './home/clock/clock.component';
import { TemplateComponent } from './components/template/template.component';

import { LoginComponent } from './components/login/login.component';
import { BiosComponent } from './components/bios/bios.component';
import { MusicComponent } from './home/music/music.component';

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
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'calculator',
    title: 'Calculator',
    component: CalculatorComponent,
  },
  {
    path: 'notes',
    title: 'Notes',
    component: NotesComponent,
  },
  {
    path:'clock',
    component: ClockComponent,
  },
  {
    path:'template',
    component: TemplateComponent,
  },
  {
    path:'music',
    title:'Music',
    component: MusicComponent,
  }
];
