import { Component, OnInit } from '@angular/core';
import { CRUDService, INVENTARIO} from '../CRUD/crud.service'; //importamos el código del servicio CRUD
import {Utilidad} from '../gananciaService/ganancia-service.service'  //importamos la interface para la utilidad
import { Router } from '@angular/router';

@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.css']
})

export class GananciasComponent implements OnInit {
  ListarCrud : INVENTARIO[] | any; //se define un objeto para listar los elemenetos de las columnas
  utilidad : number = this.obtenerUtilidad(); //variable que recibirá el valor total de la utilidad

  definirUtilidad : Utilidad = {  //definimos las variables que utilizaremos
    unidades : 0,
    precioVenta : 0,
    preciocompra : 0
  }

  constructor(private CRUDService: CRUDService, private router :Router) { } //importamos la clase del servicio

  ngOnInit(): void {
    this.listarCrud();
    this.obtenerUtilidad(); //hacemos que nuestra función se cargue en el programa al abrirlo
  }

  //función para hacer select en la base de datos 
  listarCrud(){ 
    this.CRUDService.getCrud().subscribe(
      res => {  
        this.ListarCrud = res;
        console.log(this.ListarCrud)
      }
    );
  }

  obtenerUtilidad(){
    return 0
  }
}
