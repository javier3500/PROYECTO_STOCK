import { Injectable,EventEmitter,Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SCarritoService {

  @Output () disparador_de_lista : EventEmitter <any> = new EventEmitter();
  @Output () suma_de_valores : EventEmitter <any> = new EventEmitter();

  contador(indice : number){
    let i = indice - 1
    return i
  }
  constructor() { }
}

export interface LISTA_DATOS {
  idarticulo? :string;
  producto? :string;  
  existencia? : number;
  precioventa? :number;
  preciocompra? :number;
  id_presentacion? :string;
  presentacion? :string;
  
}

export interface cantidades {
  existencia? : number;
}

export interface total {
  existencia? : number;
}