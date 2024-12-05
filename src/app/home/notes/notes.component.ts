// notes.component.ts
import { Component } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [FroalaEditorModule, FroalaViewModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  public editorContent: string = '';

  saveContent() {
    // Aquí puedes manejar el guardado del contenido del editor, por ejemplo:
    console.log(this.editorContent); // El contenido guardado
    // Aquí puedes hacer un POST al servidor con el contenido del editor.
  }
}
