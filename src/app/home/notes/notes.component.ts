import { User } from './../../models/user.models';
import { Component } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SecurityService } from '../../services/security.service';
import { Router } from '@angular/router';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [FroalaEditorModule, FroalaViewModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent {
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
    this.noteService.createNote({
      content: this.editorContent,
      userId: this.user?.id,
    }).subscribe({
      next: (data) => {
        console.log('Note created');
      },
      error: (error) => {
        console.log('Error creating note');
      },
    });
  }

  ViewNotes() {
    if (this.user?.id !== undefined) {
      this.noteService.findByUserId(this.user.id).subscribe({
        next: (data) => {
          console.log(data);
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
