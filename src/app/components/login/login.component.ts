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
  providers: [SecurityService],
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
    if (!this.user.email || !this.user.password) {
      alert('Por favor, complete todos los campos');
      return;
    }

    this.securityService.login(this.user).subscribe({
      next: (data) => {
        console.log('Respuesta del servidor:', data);
        this.securityService.saveSession(data);
        this.router.navigate(['bios']);
      },
      error: (err) => {
        console.error('Error al iniciar sesión:', err);
        alert('Correo o contraseña inválidos');
      },
    });
  }


  goToDesk(): void {
    this.router.navigate(['/bios']);
  }
}
