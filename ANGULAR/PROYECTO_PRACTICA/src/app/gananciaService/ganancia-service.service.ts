import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GananciaServicioService {

  constructor() { }
  
}

export interface Utilidad{
  unidades : number;
  precioVenta : number;
  preciocompra : number;
}
