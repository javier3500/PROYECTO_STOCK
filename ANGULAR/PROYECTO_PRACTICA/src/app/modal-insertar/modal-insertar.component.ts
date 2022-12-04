import { Component, OnInit } from '@angular/core';
import { CRUDService, INVENTARIO} from '../CRUD/crud.service';

import { InventarioComponent } from '../inventario/inventario.component'; 

@Component({
  selector: 'app-modal-insertar',
  templateUrl: './modal-insertar.component.html',
  styleUrls: ['./modal-insertar.component.css']
})
export class ModalInsertarComponent implements OnInit {

  valor :string = '';
  
  crud : INVENTARIO = {
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    id_presentacion :'pre01',
    presentacion :''
  };

  constructor(private modalSS:CRUDService ,  private claseinvetario : InventarioComponent) { }

  ngOnInit(): void {
    
  }

  close_modal_insertar(){
    this.modalSS.$modal_insertar.emit(false);
    console.log('CERRAR ')
  }

  insertar_modulo(){

    
    try{
    
    this.modalSS.insertar_articulo(this.crud).subscribe(
      res=>{
        console.log(res);
      }
    );
    
    this.claseinvetario.listarCrud();
   
    this.modalSS.$modal_insertar.emit(false);
    
    }catch (e){

      console.log("CONSULTA ERROENEA")
    }
    
  }




    

}
