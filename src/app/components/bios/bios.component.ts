import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bios',
  standalone: true,
  imports: [],
  templateUrl: './bios.component.html',
  styleUrl: './bios.component.css'
})
export class BiosComponent implements OnInit {
  constructor(private router: Router, private ngZone: NgZone) { }

  biosText: string[] = ['Initializing BIOS...'];
  private biosData: string[] = [
    'Checking system memory...',
    'Memory Test Passed: 16384MB OK',
    'Checking CPU...',
    'CPU Test Passed: Intel Core i7 3.2GHz',
    'Detecting hard drives...',
    'Drive 0: SSD 500GB OK',
    'Drive 1: HDD 1TB OK',
    'Booting OS...',
    'System ready.',
  ];

  ngOnInit(): void {
    this.simulateBIOS();
  }

  simulateBIOS(): void {
    const interval = setInterval(() => {
      if (this.biosData.length > 0) {
        let line = this.biosData.shift();
        this.biosText.push(line || '');
      } else {
        this.ngZone.run(() => {
          clearInterval(interval);
          this.router.navigate(['/login']);
        });
      }
    }, 1000);
  }
}
