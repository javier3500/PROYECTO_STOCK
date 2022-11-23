import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EquipoService {
  url='/usuarios';
  url_producto='/api_producto';

  constructor(private http: HttpClient) {}

  //post para agregar usuario
  addusuario(agregar:usuario){
    return this.http.post(this.url,agregar);
  }

  //obtener usuarios
  getUsuario(){
    return this.http.get(this.url);
  }

  //Obtener productos
  getProducto1(producto: string){
    return this.http.get(this.url+"/"+producto);
  }

  getProducto(){
    return this.http.get(this.url_producto);
  }
}

export interface usuario{
  nombreusuario: string;
  contrasena: string;
  estado: string;
  tipo: string;
}

export interface producto{
  idarticulo: string;
  producto: string;
}
