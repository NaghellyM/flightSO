import { Component } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    FroalaEditorModule,
    FroalaViewModule
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  public editorContent: string = 'Mi contenido inicial';


}
