import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as html2pdf from 'html2pdf.js';
import { SCarritoService,LISTA_DATOS,total,VENTA,numero_ventas,LISTA_DATOS_2,numero_articulos,exitencia} from '../S_carrito/s-carrito.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})



export class CarritoComponent implements OnInit {
  fecha_documento : Date = new Date();
  indice_tabla : number = 0
  capturar_id_articulo: string | any = ''
  modal_lista_boton:boolean = false;
  id_valor :any | number 
  total : any | number = 0
  id_final :any | string
  num_1 : any | number = 0
  indice : any | number = 0
  public arreglo : Array<any> =[{
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  }];
  public arreglo_2 : Array<any> =[];

  public arreglo_3 : Array<any> =[];

  public arreglo_4 : Array<any> =[];
  
  public suma : Array<any> =[];
  public id_venta : Array<any> =[];
  r:LISTA_DATOS[] | any;

  N_articulos : numero_articulos = {
    idarticulo :'',
    existencia:0
  };

  N_articulos_actualizar : exitencia = {
  
    existencia:0
  };

  lista : LISTA_DATOS = {
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  };

  lista_2 : LISTA_DATOS_2 = {
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  };
  
  restar_total : LISTA_DATOS = {
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  };

    total_cantidad : total = {
      precioventa: 0
  };
    Venta_activa: VENTA = {
    idventa :'',
    vendido : 0,
    fecha :'',
    hora :''
  }
   N_regitro: numero_ventas= {
    id_count:0
  }

  
 
  constructor(private router : Router,private Carga :SCarritoService) {

  
   }

    ngOnInit(): void {
    
    this.numero_registro()
    this.Carga.$lista_articulos.subscribe((valor)=> (this.modal_lista_boton = valor));

    
    this.Carga.disparador_de_lista.subscribe(
      (data: any) => {
        this.arreglo.push(data)
        this.r =this.arreglo;
      
      }
    )

    this.Carga.suma_de_valores.subscribe(
        (data : any) => {
        this.suma.push(data)
        this.indice = this.suma.length
        let i = this.Carga.contador(this.indice)
        this.total_cantidad = this.suma[i]
        this.total = this.total + this.total_cantidad.precioventa
    })

  }
//listo terminado
  numero_registro(){
  this.Carga.getCrud().subscribe(
      (data :any) => {
      this.id_venta = data
      this.N_regitro = this.id_venta[0]
      this.id_valor = this.N_regitro.id_count
      }
  );

  this.Carga.getCrud().subscribe(
    (data :any) => {
    this.id_venta = data
    this.N_regitro = this.id_venta[0]
    this.id_valor = this.N_regitro.id_count
    this.id_valor++;
    this.id_final = 'venta'+ this.id_valor 
   }
 );

}
//listo terminado
  FINALIZARVENTA()
  {
   this.numero_registro()
    let fecha : Date = new Date();
    let separador: string = '/'
    let hora = fecha.toLocaleTimeString();
    let cadena_2 = ''
    let cadena_3 = ''
    cadena_2 = fecha.toLocaleDateString()
    let arreglo : string[]= cadena_2.split(separador)
    let i : number = 2
    while(i > -1){
        if(i != 0){
          cadena_3 = cadena_3 + arreglo[i]
          cadena_3 = cadena_3 +'-'
        }else{
          cadena_3 = cadena_3 + arreglo[i]
        }
      i--
    }
    this.Venta_activa.idventa = this.id_final
    this.Venta_activa.vendido = this.total
    this.Venta_activa.hora = hora
    this.Venta_activa.fecha = cadena_3
    try{
      this.Carga.Registrar_venta(this.Venta_activa).subscribe(
        res=>{
         console.log(res);
        }, err => 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        })
      );
      }catch (e){
        console.log("CONSULTA ERROENEA")
      }

      this.actualizar_existencias()
    
      Swal.fire({
        icon: 'success',
        title: 'GRACIAS POR SU COMPRA',
        text: 'VUELVA PRONTO',
        timer: 2000
      })
  }

//listo terminado
    agregar_lista_consulta(){
      this.Carga.Recopilar_articulo(this.capturar_id_articulo).subscribe(
        (data : any) => {
        this.lista = data[0]
        this.total = this.total + this.lista.precioventa
        this.arreglo.push(data[0])
        this.r =this.arreglo;
      },
      )
    }
//listo terminado
    open_modal_listar(){
    this.modal_lista_boton = true;
  }


//listo terminado
  eliminar_articulo_lista(idarticulo:string){
      let i : number=0
    
    while(i<this.arreglo.length){
    this.lista_2 = this.arreglo[i]
    this.arreglo_3[i] = this.lista_2
      i++
    }
    const valor = this.arreglo_3.find(Element =>{
      return Element.idarticulo === idarticulo
    })

    let t : number = this.arreglo.length -1
    let variable : number = 0
    let index: number = this.arreglo.indexOf(valor)
    while(t > -1){
    
     if(index <= t){
      if(index == t){
        console.log(" index = "+index + " indice =  "+ t)
        console.log("ELIMINA VALOR")
        this.restar_total=this.arreglo.pop()
        this.total = this.total - this.restar_total.precioventa
      }else{
        console.log(" index = "+index + " indice =  "+ t)
        console.log("GUARDA VALOR")
        this.arreglo_2[variable]= this.arreglo.pop()
        variable++
      }     
    }
        t--
    }
    let indice_final : number = 0
    let indice_final_3 : number = this.arreglo_2.length
    while(indice_final < indice_final_3){
      console.log( "------> "+indice_final) 
      this.arreglo.push(this.arreglo_2.pop())
      indice_final++
    }
    let limpiar : number = 0
    let limpiar_2 : number = this.arreglo_3.length
    while(limpiar < limpiar_2){
           this.arreglo_3.pop()
           console.log(this.arreglo_3)
         limpiar++
       }
  }


//listo terminado
  actualizar_existencias(){
    let indice,indice_2, valor_1 : number = 0 
    let id_articulo : string = ''
    indice = this.arreglo.length
    indice_2 = this.suma.length
    while(indice > 0){
    this.N_articulos=this.arreglo.pop()
    id_articulo = this.N_articulos.idarticulo
    valor_1 = this.N_articulos.existencia - 1
    this.N_articulos_actualizar.existencia = valor_1

    this.Carga.editar_articulo(id_articulo,this.N_articulos_actualizar).subscribe(
      res => {
       console.log(res)
      },
      err => console.log(err)
     )
    indice--
    }
// VACIA LA SUMA TOTAL  
    while(indice_2 > 0){
      this.suma.pop()
      indice_2--
      }
      this.total = 0
  }

  btnCrearPdf(){
    var pdf = {
      margin:1,
      filename: this.fecha_documento.toLocaleDateString()+'/'+this.fecha_documento.toLocaleTimeString()+'_.pdf'+'.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
     
    }

    var element = document.getElementById('creacion_pdf')

    html2pdf()
      .from(element)
      .set(pdf)
      .save();
  }

}