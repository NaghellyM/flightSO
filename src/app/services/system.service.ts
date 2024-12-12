import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Process, SystemResources } from '../models/system.models';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  private apiUrl = `${environment.url_serve}/api/system-resources`;

  constructor(private http: HttpClient) {}

  // Método para obtener la información del sistema
  getAllSystemResources(): Observable<SystemResources> {
    return this.http.get<SystemResources>(`${this.apiUrl}/all`);
  }

  // Método para obtener los procesos de electron
  getProcesses(): Observable<Process[]> {
    return this.http.get<Process[]>(`${this.apiUrl}/process`);
  }
}
