import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // Cambia a ShadowDom o None si es necesario
})
export class TemplateComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() label: string = '';
  @Input() style: { [key: string]: any } = {};
  @Output() removeApp = new EventEmitter<string>();
  @Output() putInFront = new EventEmitter<string>();

  public expanded = false;
  public display = 'block';
  public position = { x: 0, y: 0 };
  public selected = false;

  closeApp(): void {
    this.router.navigate(['/home']);
  }
  toggleSize(): void {
    this.position = { x: 0, y: 0 };
    this.expanded = !this.expanded;
  }

  minimize(): void {
    this.display = 'none';
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.display = this.style['display'] || 'block';
  }

  get computedStyles(): { [key: string]: any } {
    return { ...this.style, display: this.display };
  }

  onDragStart(): void {
    this.selected = true;
  }

  onDragEnd(event: DragEvent): void {
    if (event) {
      this.position = { x: event.clientX, y: event.clientY };
    }
    this.selected = false;
  }
}
