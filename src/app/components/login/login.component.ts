import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.models';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User;

  constructor(
    private securityService: SecurityService, 
    private router: Router
  ) {
    this.user = { email: '', password: '' };
  }

  ngOnInit(): void { } 
  ngOnDestroy(): void { } 

  login(): void {
    this.securityService.login(this.user).subscribe({
      next: (data) => {
        this.securityService.saveSession(data);
        this.router.navigate(['dashboard']);
      },
      error: () => {
  
      },
    });
  }

  goToDesk(): void {
    this.router.navigate(['/desk']);
  }
}
