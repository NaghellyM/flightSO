import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; 

//Componentes FlightSO
import { AppComponent } from './app.component';
import { BiosComponent } from './components/bios/bios.component';


@NgModule({
  declarations: [
  
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BiosComponent
  ],
  providers: [],
})
export class AppModule {}
