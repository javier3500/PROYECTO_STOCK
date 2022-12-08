import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as html2pdf from 'html2pdf.js';
import { SCarritoService,LISTA_DATOS,total,
  VENTA,numero_ventas,LISTA_DATOS_2,numero_articulos,
  exitencia,TOTAL_COSTO_1,TOTAL_COSTO_2,total_2, conseguir_id_ganancias, GANANCIAS} from '../S_carrito/s-carrito.service';
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
  id_valor_2 :any | number 
  total : any | number = 0
  total_costo : any | number = 0
  
  id_final :any | string
  id_final_2 :any | string
  num_1 : any | number = 0
  indice : any | number = 0
  indice_2 : any | number = 0
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
  public suma_2 : Array<any> =[];
  public id_venta : Array<any> =[];
  public id_ganancia : Array<any> =[];
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
  total_cantidad_costo : total_2 = {
    preciocompra: 0
};
    Venta_activa: VENTA = {
    idventa :'',
    vendido : 0,
    fecha :'',
    hora :'',
    totalcompra :0
  }

  insertar_ganancias: GANANCIAS = {
  idganancias: '',
  ganacia:0,
  idventa:''
  }
   N_regitro: numero_ventas= {
    id_count:0
  }

  N_regitro_2: conseguir_id_ganancias= {
    id_gan:0
  }
  T_costo : TOTAL_COSTO_1 = {
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  };
  COSTO : TOTAL_COSTO_2 = {
    preciocompra :0,
  };
  
 
  constructor(private router : Router,private Carga :SCarritoService) {

  
   }

    ngOnInit(): void {
     this.limpiar_arregle()
    this.numero_registro()
    this.numero_registro_2()
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

    this.Carga.suma_de_costo.subscribe(
      (data : any) => {
      this.suma_2.push(data)
      this.indice_2 = this.suma_2.length
      let i = this.Carga.contador_2(this.indice_2)
      this.total_cantidad_costo = this.suma_2[i]
      this.total_costo = this.total_costo + this.total_cantidad_costo.preciocompra
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
numero_registro_2(){
  this.Carga.recopilar_id_ganancias().subscribe(
      (data :any) => {
      this.id_ganancia = data
      this.N_regitro_2 = this.id_ganancia[0]
      this.id_valor_2 = this.N_regitro_2.id_gan
      }
  );

  this.Carga.recopilar_id_ganancias().subscribe(
    (data :any) => {
    this.id_ganancia = data
    this.N_regitro_2 = this.id_ganancia[0]
    this.id_valor_2 = this.N_regitro_2.id_gan
    this.id_valor_2++;
    this.id_final_2 = 'venta'+ this.id_valor_2 
   }
 );

}
//listo terminado
  FINALIZARVENTA()
  {
   this.numero_registro()
   this.numero_registro_2()
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
    this.Venta_activa.totalcompra = this.total_costo


    this.insertar_ganancias.idganancias = this.id_final_2
    this.insertar_ganancias.ganacia = this.total-this.total_costo
    this.insertar_ganancias.idventa = this.id_final

      Swal.fire({
        title: '¿Está seguro con la compra?',
        text: "¡No podras regresar tu venta!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, bórralo!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.actualizar_existencias()
          
            this.Carga.Registrar_venta(this.Venta_activa).subscribe(
              res=>{
                this.Carga.Registrar_ganancias(this.insertar_ganancias).subscribe(
                  res =>{
                    Swal.fire(
                      'Gracias por su compra!',
                      'Vuelva pronto.',
                      'success'
                    )
                })
                
              }
            );
           
            
        }
      })
  }

//listo terminado
    agregar_lista_consulta(){
      this.Carga.Recopilar_articulo(this.capturar_id_articulo).subscribe(
        (data : any) => {
        this.lista = data[0]
        this.total = this.total + this.lista.precioventa
        this.total_costo = this.total_costo + this.lista.preciocompra
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
        this.restar_total=this.arreglo.pop()
        this.total = this.total - this.restar_total.precioventa
        this.total_costo = this.total_costo - this.restar_total.preciocompra
      }else{
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
    let indice_3: number = this.suma_2.length
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

      while(indice_3 > 0){
        this.suma_2.pop()
        indice_3--
        }

      this.total = 0
      this.total_costo = 0
      this.limpiar_arregle()
  }
//listo
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
//listo
  limpiar_arregle(){
    let i : number = 0
    let i_2 : number = this.arreglo.length
    while(i < i_2){
      this.arreglo.pop()
      i++
    }    
  }

}