import { SecurityService } from './../services/security.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { User } from '../models/user.models';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ClockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  user: User | undefined;
  constructor(private router: Router, private securityService: SecurityService) {
    this.securityService.getUser().subscribe({ next: (data) => { this.user = data; } });
  }

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
    this.router.navigate(['/system']);
  }
  goToMusic(): void {
    this.router.navigate(['/music']);
  }
  goToGame(): void {
    this.router.navigate(['/game']);
  }
  goToFile(): void {
    this.router.navigate(['/file']);
  }
  goToBrowser(): void {
    window.open('https://www.google.com/', '_blank');
  }
}
