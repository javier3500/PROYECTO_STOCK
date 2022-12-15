import { Injectable,EventEmitter,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as html2pdf from 'html2pdf.js';
@Injectable({
  providedIn: 'root'
})
export class GananciaServicioService {
  url= '/carrito/';
  url_2= '/carrito_2/';
  url_3= '/registros_ventas_1_sql/';
  url_4= '/registros_ventas_2_sql/';
  constructor(private http: HttpClient) { }
 
  $lista_articulos = new EventEmitter <any>();
  @Output () disparador_de_lista : EventEmitter <any> = new EventEmitter();
  @Output () suma_de_valores : EventEmitter <any> = new EventEmitter();
  @Output () suma_de_costo : EventEmitter <any> = new EventEmitter();

  mostrar_datos(){
    return this.http.get(this.url_4);
  }
  
}

export interface LISTA_DATOS {
  //indice_tabla?: number
  idventa? :string;
  vendido? :number;  
  fecha? : string;
  hora? :string | any;
  totalcompra? :number| any;
  idganancias? :string;
  ganacia? :number;
}

export interface LISTA_DATOS_2 {
  //indice_tabla?: number
  idventa? :string;
  vendido? :number;  
  fecha? : string;
  hora? :string | any;
  totalcompra? :number| any;
  idganancias? :string;
  ganacia? :number;
}
