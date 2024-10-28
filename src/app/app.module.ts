import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@NgModule({
  declarations: [
     // Agrega tus componentes aquí
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Asegúrate de importar HttpClientModule aquí
  ],
  providers: [],
  bootstrap: [], // Especifica el componente raíz que se ejecutará
})
export class AppModule {}
