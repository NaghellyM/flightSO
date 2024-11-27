import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private router: Router) {}
  login = {
    name: 'User 1',
    image: './assets/images/avatar_flightSO.png'
  }
  goToDesk(): void {
    this.router.navigate(['/desk']);
  }
}
