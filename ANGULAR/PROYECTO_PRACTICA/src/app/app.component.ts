import { Component } from '@angular/core';
import { AutenticacionService } from './autenticacion/autenticacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROYECTO_PRACTICA';

  constructor(private confirmar:AutenticacionService){}

 public visualizarlogin():boolean{
  //console.log( this.confirmar.ingresar);
  return this.confirmar.ingresarlogin();
 }

 public visualizarmenu1():boolean{
  //console.log( this.confirmar.ingresar);
  return this.confirmar.ingresarmenu1();
 }

 public visualizarmenu2():boolean{
  //console.log( this.confirmar.ingresar);
  return this.confirmar.ingresarmenu2();
 }


}
