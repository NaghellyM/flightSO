import { Component } from '@angular/core';
import { TemplateComponent } from '../../components/template/template.component';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css',
})
export class MusicComponent {
  display: string = '';
  label: string = 'Calculator'; // Etiqueta para el componente TemplateComponent
  style = {
    display: 'block',
  };
}
