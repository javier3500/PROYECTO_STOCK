import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private ingresar: boolean = false;

  constructor() { }

    public ingresaraplicativo(obj:any):boolean{
    this.ingresar =  obj.usuario == 'A'  && obj.password == 'A'; 
    return this.ingresar;

  }

  public habilitarlogeo(){
    return this.ingresar;
  }

}
