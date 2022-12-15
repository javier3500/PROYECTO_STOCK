import { Component, OnInit } from '@angular/core';
import { CRUDService, INVENTARIO, INVENTARIO_2, presentacion} from '../CRUD/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-modificar',
  templateUrl: './modal-modificar.component.html',
  styleUrls: ['./modal-modificar.component.css']
})
export class ModalModificarComponent implements OnInit {
  

  //r:INVENTARIO[] | any;
  valor : string |any

  
  actualizar : INVENTARIO_2 = {
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    idpresentacion :'',
    presentacion :''
  }; 
  
  presentacion : presentacion = {
    idpresentacion:'',
    presentacion:''
  }

  constructor(private modalSS:CRUDService, private router : Router, private ACT_router : ActivatedRoute) { }

  ngOnInit(): void {
  
    const id_entrada = <string>this.ACT_router.snapshot.params['id'];
    
    if(id_entrada){
      this.modalSS.mostrar_datos(id_entrada).subscribe(
        (res :any)=>{
          this.actualizar = res[0];
          console.log(res)
        },
        err=>console.log(err)
      );
    }

  }

  modificar(){
    this.valor =  this.actualizar.idarticulo
    this.presentacion.idpresentacion = this.actualizar.idpresentacion
    this.presentacion.presentacion = this.actualizar.presentacion
    this.modalSS.modificar_presentacion(this.presentacion).subscribe({

    })
   this.modalSS.editar_articulo(this.valor,this.actualizar).subscribe(
    res => {
      Swal.fire({
        icon: 'success',
        title: 'MODIFICACION EXITOSA',
        text: 'VUELVA PRONTO',
        timer: 2000
      })
      this.router.navigate(['/inventario_ventana/'])
    }, err => 
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err,
    })
   )
  }
  Cerrar_modal_modificar(){
    this.router.navigate(['/inventario_ventana/'])
  }

  

}
