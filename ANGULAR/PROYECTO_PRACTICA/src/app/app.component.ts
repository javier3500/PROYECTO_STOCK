import { Component } from '@angular/core';
import { AutenticacionService } from './autenticacion/autenticacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROYECTO_PRACTICA';

  constructor(private confirmar:AutenticacionService){

  }

 public visualizarmenu():boolean{
  return this.confirmar.habilitarlogeo();
 }


}
