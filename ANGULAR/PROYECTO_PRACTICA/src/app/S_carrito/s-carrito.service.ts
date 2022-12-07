import { Injectable,EventEmitter,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SCarritoService {
  
  url= '/carrito/';
  url_2= '/carrito_2/';
  $lista_articulos = new EventEmitter <any>();
  @Output () disparador_de_lista : EventEmitter <any> = new EventEmitter();
  @Output () suma_de_valores : EventEmitter <any> = new EventEmitter();

  contador(indice : number){
    let i = indice - 1
    return i
  }

  contador_2(indice : number){
    let i = indice - 1
    return i
  }

  constructor(private http: HttpClient) { }

  getCrud()
  {
    return this.http.get(this.url);
  }

  Registrar_venta(datos : VENTA){
    return this.http.post(this.url,datos);
  }

  Recopilar_articulo(id:string)
  {
    return this.http.get(this.url_2+'/'+id);
  }

  editar_articulo(id:string,datos : exitencia ){
    return this.http.put(this.url_2+'/'+id,datos);
  }
}

export interface LISTA_DATOS {
  //indice_tabla?: number
  idarticulo? :string;
  producto? :string;  
  existencia? : number | any;
  precioventa? :number | any;
  preciocompra? :number;
  presentacion? :string;
  
  
}
export interface LISTA_DATOS_2 {
  
  idarticulo? :string;
  producto? :string;  
  existencia? : number;
  precioventa? :number;
  preciocompra? :number;
  presentacion? :string;
  
}
export interface cantidades {
  existencia? : number;
}
export interface total {
  precioventa? : number;
}
export interface VENTA {
  idventa? :string;
  vendido? : number;
  fecha? :string;
  hora? :string;
}
export interface numero_ventas {
  id_count?:number
}
export interface numero_articulos {
  idarticulo? :string | any;
  existencia?:number | any;
}
export interface exitencia{
  existencia?:number | any;
}