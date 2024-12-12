import { Component,  } from '@angular/core';
import { TemplateComponent } from '../../components/template/template.component';
import { NotesComponent } from '../notes/notes.component';
import { NotesService } from '../../services/notes.service';
import { User } from '../../models/user.models';
import { SecurityService } from '../../services/security.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './file.component.html',
  styleUrl: './file.component.css',
})
export class FileComponent {
  notes: any = [];
  user: User | undefined;

  constructor(
    private securityService: SecurityService,
    private router: Router,
  ) {
    this.securityService.getUser().subscribe({
      next: (data) => {
        this.user = data;
      },
    });
  }

  goToVideo(): void {
    window.open('https://www.youtube.com/', '_blank');
  }
  goToPhoto(): void {
    window.open('https://photos.google.com/u/1/?hl=es/', '_blank');
  }
  goToNote(): void {
    this.router.navigate(['notes']);
  }
}
