import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-primero';
  suma:number = 0;
  promedio:number = 0;
  edadUno:number = 0;
  edadDos:number = 0;
  usuario={
    nombre : null,
    clave : null
  }
  Calcular(){
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }
  LimpiarInputs(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
