import { EventEmitter,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CRUDService {
  
  $modal_insertar = new EventEmitter <any>();
  $modal_lista = new EventEmitter <any>();

  url='/api/';
  url_2= '/carrito_2/';
  url_3= '/registros_ventas_1_sql/';
  url_4= '/registros_ventas_2_sql/';
  constructor(private http: HttpClient) {}

  
  //RECOPILA LA INFORMACION DE LOS DATOS PARA MANDARLO AL HTML 
  getCrud()
  {
    return this.http.get(this.url);
  }
  
  mostrar_datos(id:string)
  {
    return this.http.get(this.url+'/'+id);
  }

  // EN ESTA PARTE LO QUE REALIZA ES LA ELIMINACION DEL ARTICULO 
  eliminar_articulo(id:string){
      return this.http.delete(this.url+'/'+id);
    
  }
  // EN ESTA SECCION PUEDES HACER LA ACTUALIZACION DE LOA DATOS DEL ARTICULOS 
  /*
  editar_articulo(id:string,datos: INVENTARIO){
    return this.http.put(this.url+'/'+id,datos);
  }
*/
  editar_articulo(id:string,datos : INVENTARIO){
    return this.http.put(this.url+'/'+id,datos);
  }

  insertar_articulo(datos : INVENTARIO){
    return this.http.post(this.url,datos);
  }

  N_presentacion()
  {
    return this.http.get(this.url_2);
  }

  agregar_presentacion(datos : presentacion){
    return this.http.post(this.url_2,datos);
  }


  modificar_presentacion(datos:presentacion){
    return this.http.put(this.url_4,datos);
  }
  

}

// EXPORTA LOS DATOS RECOPILADOS PERMITE ENVIARLOS A OTRAS TABLAS.

export interface INVENTARIO {
  idarticulo? :string;
  producto? :string;  
  existencia? : number;
  precioventa? :number;
  preciocompra? :number;
  id_presentacion? :string;
  presentacion? :string;
}

export interface INVENTARIO_2 {
  idarticulo? :string;
  producto? :string;  
  existencia? : number;
  precioventa? :number;
  preciocompra? :number;
  idpresentacion? :string;
  presentacion? :string;
}

export interface numero_presentacion {
  id_pre?:number;
}

export interface presentacion {
  idpresentacion?:string|any;
  presentacion?:string|any
}

export interface presentacion_2 {
  idpresentacion?:string|any;

}



