import { Component, OnInit } from '@angular/core';
import { CRUDService, INVENTARIO} from '../CRUD/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-modal-modificar',
  templateUrl: './modal-modificar.component.html',
  styleUrls: ['./modal-modificar.component.css']
})
export class ModalModificarComponent implements OnInit {

  //r:INVENTARIO[] | any;
  valor : string |any

  actualizar : INVENTARIO = {
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    id_presentacion :'pre01',
    presentacion :''
  }; 
  

  constructor(private modalSS:CRUDService, private router : Router, private ACT_router : ActivatedRoute) { }

  ngOnInit(): void {
   
    const id_entrada = <string>this.ACT_router.snapshot.params['id'];
    
    if(id_entrada){
      this.modalSS.mostrar_datos(id_entrada).subscribe(
        (res :any)=>{
          //console.log(res)
          this.actualizar = res[0];
          //console.log(res[0]);
          //console.log(this.actualizar.id_articulo)
        },
        err=>console.log(err)
      );
    }

  }

  modificar(){
    //console.log(this.actualizar);
    this.valor =  this.actualizar.idarticulo
    //console.log(this.valor);
  
   this.modalSS.editar_articulo(this.valor,this.actualizar).subscribe(
    res => {
      //console.log(res)
      this.router.navigate(['/inventario_ventana/'])
    },
    err => console.log(err)
   )

  }

  Cerrar_modal_modificar(){
    this.router.navigate(['/inventario_ventana/'])
  }

 
}
