import { User } from './../../models/user.models';
import { Component } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SecurityService } from '../../services/security.service';
import { NotesService } from '../../services/notes.service';
import Swal from 'sweetalert2';
import { TemplateComponent } from '../../components/template/template.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [FroalaEditorModule, FroalaViewModule, TemplateComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
viewNotes() {
throw new Error('Method not implemented.');
}
  user: User | undefined;
  constructor(
    private securityService: SecurityService,
    private noteService: NotesService
  ) {
    this.securityService.getUser().subscribe({
      next: (data) => {
        this.user = data;
      },
    });
  }
  public editorContent: string = '';

  saveContent() {
    this.noteService
      .createNote({
        content: this.editorContent,
        userId: this.user?.id,
      })
      .subscribe({
        next: (data) => {
          Swal.fire({
            title: 'Nota creada!',
            text: 'Click en el boton para continuar',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        },
        error: (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool',
          });
        },
      });
  }

  ViewNotes() {
    if (this.user?.id !== undefined) {
      this.noteService.findByUserId(this.user.id).subscribe({
        next: (data) => {
          console.log(data);
          Swal.fire({
            title: 'Notas encontradas!',
            text: 'Click en el boton para continuar',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        },
        error: (error) => {
          console.log('No se encontraron notas');

        },
      });
    } else {
      console.log('Usuario no encontrado');
    }
  }
}
