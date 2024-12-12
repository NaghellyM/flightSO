import { Component } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SecurityService } from '../../services/security.service';
import { NotesService } from '../../services/notes.service';
import Swal from 'sweetalert2';
import { TemplateComponent } from '../../components/template/template.component';
import { User } from './../../models/user.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [FroalaEditorModule, FroalaViewModule, TemplateComponent, CommonModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
  user: User | undefined;
  notes: any[] = []; // Variable para almacenar las notas

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

  // Método para guardar una nota
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
            confirmButtonText: 'ok',
          });
        },
        error: (error) => {
          Swal.fire({
            title: 'No se pudo crear la nota!',
            text: 'Click en el boton para continuar',
            icon: 'error',
            confirmButtonText: 'ok',
          });
        },
      });
  }

  // Método para visualizar las notas
  ViewNotes() {
    if (this.user?.id !== undefined) {
      this.noteService.findByUserId(this.user.id).subscribe({
        next: (data) => {
          this.notes = data; // Asignamos las notas obtenidas al arreglo
          console.log(this.notes);
          Swal.fire({
            title: 'Notas encontradas!',
            text: 'Click en el boton para continuar',
            icon: 'success',
            confirmButtonText: 'ok',
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

  // Método para extraer el contenido dentro de las etiquetas <p> de una nota
  getNoteContent(note: string): string {
    const regex = /<p>(.*?)<\/p>/; // Expresión regular para capturar el contenido dentro de <p></p>
    const match = note.match(regex);
    return match ? match[1] : ''; // Retorna el contenido dentro de <p>, o cadena vacía si no encuentra nada
  }
}
