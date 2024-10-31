import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desk',
  standalone: true,
  imports: [],
  templateUrl: './desk.component.html',
  styleUrl: './desk.component.css',
})
export class DeskComponent {
  constructor(private router: Router) { }

  goToDesk(): void {
    this.router.navigate(['/desk']);
  }
  goToCalculator(): void {
    this.router.navigate(['/calculator']);
  }
  goToTaskManageresk(): void {
    this.router.navigate(['/task-manager']);
  }
}
