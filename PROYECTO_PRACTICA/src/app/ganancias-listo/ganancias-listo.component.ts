import { Component, OnInit } from '@angular/core';
import {GananciaServicioService,LISTA_DATOS,LISTA_DATOS_2} from '../gananciaService/ganancia-service.service'  //importamos la interface para la utilidad
import { Router } from '@angular/router';

@Component({
  selector: 'app-ganancias-listo',
  templateUrl: './ganancias-listo.component.html',
  styleUrls: ['./ganancias-listo.component.css']
})
export class GananciasListoComponent implements OnInit {
  r:LISTA_DATOS[] | any;
  r_2:LISTA_DATOS_2[] | any;
  fecha_documento : Date = new Date();
  public arreglo : Array<any> =[];
  public arreglo_2 : Array<any> =[];
  valor : number = 0
  constructor(private objeto_ganancias : GananciaServicioService ,private router :Router) { }

  ngOnInit(): void {
    this.lista_ganancias()
  }

  lista_ganancias(){
    let bandera : boolean = true
    let contador:number = 0
    this.objeto_ganancias.mostrar_datos().subscribe(
      (data:any) => {
      
    while(bandera){
      if(data[contador]== null){
        bandera = false
      }else{
        this.arreglo[contador] = data[contador]
      }
      contador++
    }
    this.r=data
    })
  }

  agregar_reporte(
    idventa:string,
    vendido:number,
    totalcompra:number,
    idganancias:string,
    ganacia:number,
    fecha:Date,
    hora:string)  {
      
    this.objeto_ganancias.disparador_de_lista.emit({
      idventa : idventa,
      vendido :vendido,
      totalcompra:totalcompra,
      idganancias:idganancias,
      ganacia:ganacia,
      fecha:fecha,
      hora:hora,
     })

     

  }
}
