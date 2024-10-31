import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BiosComponent } from "./components/bios/bios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BiosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FlightSO';

  ngOnInit(): void {
    function sayHelloJs(x: string) {
      alert('Hello from ' + x);
    }
  }
}
