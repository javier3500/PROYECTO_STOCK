import { Component, OnInit } from '@angular/core';
import {GananciaServicioService,LISTA_DATOS,LISTA_DATOS_2} from '../gananciaService/ganancia-service.service'  //importamos la interface para la utilidad
import { Router } from '@angular/router';
import * as html2pdf from 'html2pdf.js';
@Component({
  selector: 'app-ganancias',
  templateUrl: './ganancias.component.html',
  styleUrls: ['./ganancias.component.css']
})

export class GananciasComponent implements OnInit {
  r:LISTA_DATOS[] | any;
  r_2:LISTA_DATOS_2[] | any;
  fecha_documento : Date = new Date();
  public arreglo : Array<any> =[];
  public arreglo_2 : Array<any> =[];
  valor : number = 0
  constructor( private objeto_ganancias : GananciaServicioService ,private router :Router) { } //importamos la clase del servicio

  ngOnInit(): void {
   
    
    this.objeto_ganancias.disparador_de_lista.subscribe(
      (data:any)=>{
        this.arreglo_2.push(data)
        this.r_2=this.arreglo_2
     })
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

  eliminar_lista(){
    this.arreglo_2.pop()
  }

  btnCrearPdf(){
    var pdf = {
      margin:1,
      filename: this.fecha_documento.toLocaleDateString()+'/'+this.fecha_documento.toLocaleTimeString()+'_.pdf'+'.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
     
    }

    var element = document.getElementById('reporte_impreso')

    html2pdf()
      .from(element)
      .set(pdf)
      .save();

    
  }
  
  limpiar_arregle(){
    let i : number = 0
    let i_2 : number = this.arreglo_2.length
    while(i < i_2){
      this.arreglo_2.pop()
      i++
    }    
  }
}
