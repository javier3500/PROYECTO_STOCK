import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as html2pdf from 'html2pdf.js';

import { SCarritoService,LISTA_DATOS,total,
  VENTA,numero_ventas,LISTA_DATOS_2,numero_articulos,
  exitencia,TOTAL_COSTO_1,TOTAL_COSTO_2,total_2, conseguir_id_ganancias, 
  GANANCIAS,LISTA_DATOS_3} from '../S_carrito/s-carrito.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
  valor_real : any
  fecha_documento : Date = new Date();
  indice_tabla : number = 0
  capturar_id_articulo: string | any = ''
  modal_lista_boton:boolean = false;
  id_valor :any | number
  id_valor_2 :any | number 
  total : any | number = 0
  total_costo : any | number = 0
  public suma : Array<any> =[];
  public suma_2 : Array<any> =[];
  public id_venta : Array<any> =[];
  public id_ganancia : Array<any> =[];
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
  public auxiliar : Array<any> =[{
    indice_tabla: 0,
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  }];
  public arreglo_5 : Array<any> =[{
    indice_tabla: 0,
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  }];
  public  restar_auxuliar : Array<any> =[{
   
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  }];
  r:LISTA_DATOS |any = {
    indice_tabla: 0,
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  }
  N_articulos : numero_articulos = {
    idarticulo :'',
    existencia:0
  };
  N_articulos_actualizar : exitencia = {
  
    existencia:0
  };
  lista : LISTA_DATOS = {
    indice_tabla:0,
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
  lista_3 : LISTA_DATOS_3 = {
    indice_tabla:0,
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  };
  lista_4 : LISTA_DATOS_3 = {
    indice_tabla:0,
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  };
  comparar : LISTA_DATOS_3 = {
    indice_tabla: 0,
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    presentacion :''
  };
  restar_total : LISTA_DATOS = {
    indice_tabla:0,
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
    this.auxiliar.pop()
    this.arreglo_5.pop()
    this.restar_auxuliar.pop()
    let contador : number = 0
     this.limpiar_arregle()
    this.numero_registro()
    this.numero_registro_2()
    this.Carga.$lista_articulos.subscribe((valor)=> (this.modal_lista_boton = valor));

    
    this.Carga.disparador_de_lista.subscribe(
      (data: any) => {
       
        this.comparar =data
        this.auxiliar.push(this.comparar)
        const valor = this.auxiliar.filter(Element =>{
          return Element.idarticulo === this.comparar.idarticulo
        })
        const valor_2 = this.auxiliar.find(Element =>{
          return Element.idarticulo === this.comparar.idarticulo
        })
        this.valor_real = valor
       
      
        this.lista_3 = valor_2
        this.lista_3.indice_tabla=valor.length 
        const valor_4 = this.arreglo_5.lastIndexOf(this.lista_3)
        if(valor_4==-1){
          this.arreglo_5.push(this.lista_3)
        }else{
          this.lista_3 = this.arreglo_5[valor_4]
          this.lista_3.indice_tabla =  valor.length
          this.arreglo_5[valor_4] = this.lista_3
        }
        this.arreglo.push(data)
        this.r =this.arreglo_5;
        
        
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
        this.comparar =data[0]
        this.auxiliar.push(this.comparar)
        const valor = this.auxiliar.filter(Element =>{
          return Element.idarticulo === this.comparar.idarticulo
        })
        const valor_2 = this.auxiliar.find(Element =>{
          return Element.idarticulo === this.comparar.idarticulo
        })
        this.valor_real = valor
       console.log(valor.length)
       console.log(valor_2)
       this.lista_3 = valor_2
       this.lista_3.indice_tabla=valor.length 
       const valor_4 = this.arreglo_5.lastIndexOf(this.lista_3)
       if(valor_4==-1){
         this.arreglo_5.push(this.lista_3)
       }else{
         this.lista_3 = this.arreglo_5[valor_4]
         this.lista_3.indice_tabla =  valor.length
         this.arreglo_5[valor_4] = this.lista_3
       }
        //this.arreglo.push(data[0])
          this.r =this.arreglo_5;
          this.capturar_id_articulo = ''
      }
      )
    }
//listo terminado
  
  
//listo terminado
  actualizar_existencias(){

    let userAccount = {
      indice_tabla: 0,
      idarticulo :'',
      existencia:0
    };
    let indice,indice_2, valor_1 : number = 0  
    let id_articulo : string = ''
    indice = this.arreglo_5.length
    indice_2 = this.suma.length
    let indice_3: number = this.suma_2.length
    while(indice > 0){
      userAccount=this.arreglo_5.pop()
      this.N_articulos.idarticulo = userAccount.idarticulo
      this.N_articulos.existencia = userAccount.existencia
    id_articulo = this.N_articulos.idarticulo
    valor_1 = this.N_articulos.existencia - userAccount.indice_tabla
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
    let i_2 : number = this.arreglo_5.length
    while(i < i_2){
      this.arreglo_5.pop()
      i++
    }
    
    let condicion: number = this.auxiliar.length
        while(condicion>-1){
          this.auxiliar.pop()
          condicion--
        }
  }


  eliminar_2(id:string){
    this.lista_2.idarticulo = id
    const valor_2 = this.arreglo_5.findIndex(Element =>{
      return Element.idarticulo === this.lista_2.idarticulo
    })
    let c_1: number = 0,c_2: number = 0,index: number = 0
    index = this.arreglo_5.length -1
    while(index > -1){
      if(valor_2 <= index){
          if(valor_2 == index){
              this.restar_total=this.arreglo_5.pop()
              this.total = this.total - (this.restar_total.precioventa * this.restar_total.indice_tabla)
              this.total_costo = this.total_costo - (this.restar_total.preciocompra * this.restar_total.indice_tabla)
          }else{
            this.arreglo_2[c_2]= this.arreglo_5.pop()
            c_2++
          }
      }
      index--
    }
    let indice_final : number = 0
    let indice_final_3 : number = this.arreglo_2.length
    while(indice_final < indice_final_3){
      this.arreglo_5.push(this.arreglo_2.pop())
      indice_final++
    }
    
    let contador : number = 0,contador2 : number = this.valor_real.length-1
    c_1 = this.auxiliar.length-1

   console.log(this.valor_real)
    while(c_1 > -1){
      const valor_3 =  this.auxiliar.lastIndexOf(this.restar_total)
      const valor_4 = this.auxiliar.lastIndexOf(this.valor_real[contador2])

     if(valor_4 <= c_1){
      if(valor_4 == c_1){
        this.auxiliar.pop()
      }else if(valor_3 == c_1){
        this.auxiliar.pop()
      }else{
          this.arreglo_3[contador] = this.auxiliar.pop()
          contador++
      }
    }
    c_1--
    contador2--
    }
    let indice_final_1 : number = 0
    let indice_final_2 : number = this.arreglo_3.length
    while(indice_final_1 < indice_final_2){
    this.auxiliar.push(this.arreglo_3.pop())
    indice_final_1++
    }
      this.auxiliar.pop()
      let condicion: number = this.auxiliar.length
      if(condicion > 0){
        while(condicion>-1){
          this.auxiliar.pop()
          condicion--
        }
      }
    console.log(this.auxiliar.length)
    console.log(this.auxiliar)
   
  }

  open_modal_listar(){
    this.modal_lista_boton = true;
  }

}