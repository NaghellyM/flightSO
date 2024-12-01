import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CalculatorComponent } from './home/calculator/calculator.component';
import { NotesComponent } from './home/notes/notes.component';
import { ClockComponent } from './home/clock/clock.component';
import { TemplateComponent } from './components/template/template.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'calculator', 
    component: CalculatorComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path:'clock',
    component: ClockComponent,
  },
  {
    path:'template',
    component: TemplateComponent,
  }
];
