import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
  goToTaskManageresk(): void {
    this.router.navigate(['/task-manager']);
  }
}
