import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EquipoService {
  url='/api_usuario';
  url_empleado='/api_empleado';
  url_sistema = '/api_sistema';

  usuarioarray: any = {};
  tipo: string = '';
  confg: string = ''

  constructor(private http: HttpClient) {}

//servicios de usuario
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

  DeteleUsuario(nombreusuario: string){
    return this.http.delete(this.url+'/'+nombreusuario);
  }

  /*
  getProducto(){
    return this.http.get(this.url_producto);
  }
  */

  login(nombreusuario: string){
    return this.http.get(this.url+"/"+nombreusuario);
  }


//servicios de empleado
  addEmpleado(agregar:empleado){
    return this.http.post(this.url_empleado,agregar);
  }

  getEmpleados(){
    return this.http.get(this.url_empleado);
  }

  DeleteEmpleado(idempleado:string){
    return this.http.delete(this.url_empleado+'/'+idempleado);
  }

//servicios de sistema
  get_config_sistema(){
    return this.http.get(this.url_sistema);
  }

  config_sistema(id: string, sistema: sistema){
    return this.http.put(this.url_sistema+"/"+id, sistema);
  }

  //servicios de sesion

  crear_sesion(){
    sessionStorage.setItem('usuario', JSON.stringify(this.usuarioarray));
  }

  getsesion(){
    return sessionStorage.getItem('usuario');
  }

  cerrar_sesion(){
    sessionStorage.removeItem('usuario');
    this.tipo = 'ninguno';
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

export interface login{
  nombreusuario: string;
  contrasena: string;
  idtipo: string;
  contrasenaBD: string;
}

export interface empleado{
  idempleado: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  sexo:string;
  fechanacimiento: string;
}

export interface sistema{
  disponible: string;
}
