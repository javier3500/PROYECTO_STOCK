import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SCarritoService,LISTA_DATOS,cantidades,total} from '../S_carrito/s-carrito.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  modal_lista_boton:boolean = false;
  total : any | number = 0
  num_1 : any | number = 0
  resultado : any | number = 0
  indice : any | number = 0
  public arreglo : Array<any> =[];
  public suma : Array<any> =[];
  r:LISTA_DATOS[] | any;
  

  actualizar : LISTA_DATOS = {
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    id_presentacion :'',
    presentacion :''
  };

    variables : cantidades = {
    
    existencia: 0
    
  };

    total_cantidad : total = {
    
    existencia: 0
    
  };
  constructor(private router : Router,private Carga :SCarritoService) { }

  ngOnInit(): void {

    
    this.Carga.disparador_de_lista.subscribe(
      (data) => {
        this.arreglo.push(data)
        this.r =this.arreglo;
      }
    )

    this.Carga.suma_de_valores.subscribe(
        (data : any) => {
        //console.log(data)
        this.suma.push(data)
        this.indice = this.suma.length
        let i = this.Carga.contador(this.indice)
        this.total_cantidad = this.suma[i]
        this.total = this.total + this.total_cantidad.existencia
        console.log("total es = "+this.total)
    })

  }
  mostrar()
  {
      console.log(this.variables)
      for(let i = 0; i<this.suma.length; i++)
      {
      this.variables = this.suma[i]
      console.log("TOTAL ES = " + this.variables.existencia)
      this.total = this.total + this.variables.existencia
      }
      console.log("TOTAL ES = " + this.total)
      //this.total_cantidad.existencia = this.total
  }
    open_modal_listar(){
    this.modal_lista_boton = true;
  }
}
