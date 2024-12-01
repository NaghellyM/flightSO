import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
  goToCalculator(): void {
    this.router.navigate(['/calculator']);
  }
  goToNotes(): void {
    this.router.navigate(['/notes']);
  }
  goToTaskManageresk(): void {
    this.router.navigate(['/task-manager']);
  }
}
