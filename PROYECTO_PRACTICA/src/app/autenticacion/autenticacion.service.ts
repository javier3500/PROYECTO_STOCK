import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  ingresar: boolean = true;

  ingresar1: boolean = false;
  ingresar2: boolean = false;
  constructor() { }

  public ingresarlogin():boolean{
    return this.ingresar;
  }

  public ingresarmenu1():boolean{
    return this.ingresar1;
  }

  public ingresarmenu2():boolean{
    return this.ingresar2;
  }
}
