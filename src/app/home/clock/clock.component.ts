import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {
  visible: boolean = true;
  
  horaCompleta: Date = new Date();
  intervaloTiempo: any;

  ngOnInit() {
    this.intervaloTiempo = setInterval(() => {
      this.horaCompleta = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervaloTiempo) {
      clearInterval(this.intervaloTiempo);
    }
  }

  get hora(): number {
    return this.horaCompleta.getHours();
  }

  get minuto(): number {
    return this.horaCompleta.getMinutes();
  }

  get segundo(): number {
    return this.horaCompleta.getSeconds();
  }

  get ano(): number {
    return this.horaCompleta.getFullYear();
  }

  get mes(): number {
    return this.horaCompleta.getMonth() + 1; 
  }

  get dia(): number {
    return this.horaCompleta.getDate();
  }
}

