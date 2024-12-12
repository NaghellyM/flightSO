import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private apiUrl = `${environment.url_serve}/api/notes`;

  constructor(private http: HttpClient) {}

  // Método para obtener todas las notas
  getNotes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Método para crear una nueva nota
  createNote(noteData: any): Observable<any> {
    return this.http.post(this.apiUrl, noteData);
  }

  // Método para obtener una nota por ID
  getNoteById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Método para actualizar una nota por ID
  updateNote(id: number, noteData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, noteData);
  }

  // Método para eliminar una nota por ID
  deleteNote(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Método para obtener todas las notas de un usuario
  findByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${userId}`);
  }
}
