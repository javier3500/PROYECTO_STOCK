import { Injectable,EventEmitter,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SCarritoService {
  
  url= '/carrito/';
  url_2= '/carrito_2/';
  url_3= '/registros_ventas_1_sql/';
  url_4= '/registros_ventas_2_sql/';

  
  $lista_articulos = new EventEmitter <any>();
  $gramaje = new EventEmitter <any>();
  @Output () disparador_de_lista : EventEmitter <any> = new EventEmitter();
  @Output () suma_de_valores : EventEmitter <any> = new EventEmitter();
  @Output () suma_de_costo : EventEmitter <any> = new EventEmitter();
  @Output () enviar_cantidad : EventEmitter <any> = new EventEmitter();

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

  recopilar_id_ganancias(){
    return this.http.get(this.url_3);
  }

  Registrar_ganancias(datos : GANANCIAS){
    return this.http.post(this.url_3,datos);
  }
}

export interface LISTA_DATOS {
  indice_tabla?: number |any 
  idarticulo? :string;
  producto? :string;  
  existencia? : number | any;
  precioventa? :number | any;
  preciocompra? :number| any;
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
export interface LISTA_DATOS_3 {
  indice_tabla?: number |any 
  idarticulo? :string;
  producto? :string;  
  existencia? : number | any;
  precioventa? :number | any;
  preciocompra? :number| any;
  presentacion? :string;
}
export interface cantidades {
  existencia? : number;
}
export interface total {
  precioventa? : number;
}
export interface total_2 {
  preciocompra? : number;
}
export interface VENTA {
  idventa? :string;
  vendido? : number;
  fecha? :string;
  hora? :string;
  totalcompra? :number |any;
}
export interface GANANCIAS {
  idganancias?: string|any;
  ganacia?:number|any;
  idventa?:string|any;
}

export interface numero_ventas {
  id_count?:number
}
export interface conseguir_id_ganancias {
  id_gan?:number | any
}
export interface numero_articulos {
  idarticulo? :string | any;
  existencia?:number | any;
}
export interface exitencia{
  existencia?:number | any;
}
export interface TOTAL_COSTO_1 {
  
  idarticulo? :string;
  producto? :string;  
  existencia? : number;
  precioventa? :number;
  preciocompra? :number;
  presentacion? :string;
  
}
export interface TOTAL_COSTO_2 {
  preciocompra? :number |any;
}