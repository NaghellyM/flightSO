import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.models';
import { SecurityService } from '../../services/security.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit,OnDestroy{ 
  user: User;

  constructor(private SecurityService: SecurityService, private router: Router) {
    this.user = { email: "", password: "" };
  }

  ngOnInit() {}
  ngOnDestroy() {}

  login() {
    this.SecurityService.login(this.user).subscribe({
      next: (data) => {
        this.SecurityService.saveSession(data);
        this.router.navigate(["dashboard"]);
      },
      error: (error) => {
        Swal.fire(
          "Autenticación Inválida",
          "Usuario o contraseña inválido",
          "error"
        );
      },
    });
  }
  goToDesk(): void {
    this.router.navigate(['/desk']);
  }
}
