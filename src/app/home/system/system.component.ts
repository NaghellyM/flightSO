import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system.service';
import { Process, SystemResources } from '../../models/system.models';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from '../../components/template/template.component';

@Component({
  selector: 'app-system',
  standalone: true,
  imports: [CommonModule, TemplateComponent],
  templateUrl: './system.component.html',
  styleUrl: './system.component.css',
})
export class SystemComponent implements OnInit {
  systemResources: SystemResources | null = null;
  processes: Process[] = [];
  error: string | null = null;

  constructor(private systemService: SystemService) {}

  ngOnInit(): void {
    this.fetchSystemResources();
    this.fetchProcesses();
  }

  fetchSystemResources(): void {
    this.systemService.getAllSystemResources().subscribe({
      next: (data) => {
        this.systemResources = data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Error fetching system resources';
        console.error(err);
      },
    });
  }

  fetchProcesses(): void {
    this.systemService.getProcesses().subscribe({
      next: (data) => {
        this.processes = data;
      },
      error: (err) => {
        console.error('Error fetching processes:', err);
        this.error = 'Error fetching processes';
      },
    });
  }
}
