import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CalculatorComponent } from './home/calculator/calculator.component';
import { ClockComponent } from './home/clock/clock.component';
import { TemplateComponent } from './components/template/template.component';

import { LoginComponent } from './components/login/login.component';
import { BiosComponent } from './components/bios/bios.component';
import { MusicComponent } from './home/music/music.component';
import { GameComponent } from './home/game/game.component';
import { NotesComponent } from './home/notes/notes.component';
import { SystemComponent } from './home/system/system.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio de sesion',
    component: LoginComponent,
  },
  {
    path: 'bios',
    title: 'Bios',
    component: BiosComponent,
  },
  {
    path: 'home',
    title: 'Escritorio',
    component: HomeComponent,
  },
  {
    path: 'calculator',
    title: 'Calculadora',
    component: CalculatorComponent,
  },
  {
    path: 'music',
    title: 'Musica',
    component: MusicComponent,
  },
  {
    path: 'game',
    title: 'Juego',
    component: GameComponent,
  },
  {
    path: 'notes',
    title: 'Notas',
    component: NotesComponent,
  },
  {
    path:'system',
    title: 'Administrador de tareas',
    component: SystemComponent
  }
  ,
  {
    path: 'clock',
    component: ClockComponent,
  },
  {
    path: 'template',
    component: TemplateComponent,
  },
];
