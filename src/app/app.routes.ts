import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CalculatorComponent } from './home/calculator/calculator.component';
import { NotesComponent } from './home/notes/notes.component';

export const routes: Routes = [
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
  }
];
