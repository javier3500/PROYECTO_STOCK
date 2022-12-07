import { Component, OnInit } from '@angular/core';
import { CRUDService, INVENTARIO,numero_presentacion,presentacion} from '../CRUD/crud.service';
import Swal from 'sweetalert2';
import { InventarioComponent } from '../inventario/inventario.component'; 

@Component({
  selector: 'app-modal-insertar',
  templateUrl: './modal-insertar.component.html',
  styleUrls: ['./modal-insertar.component.css']
})
export class ModalInsertarComponent implements OnInit {
  capturar_id_articulo: string | any = ''
  modal_lista_boton:boolean = false;
  id_valor :any | number 
  total : any | number = 0
  id_final :any | string
  public id_venta : Array<any> =[];
  valor :string = '';

  N_regitro: numero_presentacion= {
    id_pre:0,
  }

  agregar_presentacion_2: presentacion ={
    idpresentacion:'',
    presentacion:''
  }

  
  crud : INVENTARIO = {
    idarticulo :'',
    producto :'',
    existencia:0,
    precioventa :0,
    preciocompra :0,
    id_presentacion :'',
    presentacion :''
  };

  constructor(private modalSS:CRUDService ,  private claseinvetario : InventarioComponent) { }

  ngOnInit(): void {
   this.numero_registro()
  }

  close_modal_insertar(){
    this.modalSS.$modal_insertar.emit(false);
  }

  insertar_modulo(){
   this.numero_registro()
   this.crud.id_presentacion = this.id_final
    this.agregar_presentacion_2.idpresentacion = this.id_final
    this.agregar_presentacion_2.presentacion = this.crud.presentacion
    console.log(this.agregar_presentacion_2)

    this.modalSS.agregar_presentacion(this.agregar_presentacion_2).subscribe(
      res =>{
        try{
    
          this.modalSS.insertar_articulo(this.crud).subscribe(
            res=>{
              Swal.fire({
                icon: 'success',
                title: 'ARTICULO INVENTARIADO',
                text: 'GRACIAS VUELVA PRONTO',
                timer: 2000
              })
            }, err => 
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err,
            })
          );
          
          this.claseinvetario.listarCrud();
         
          this.modalSS.$modal_insertar.emit(false);
          
          }catch (e){
      
            console.log("CONSULTA ERROENEA")
          }
          
    })
    
    
  }

  mostrar(){
    console.log(this.id_final)
    console.log(this.agregar_presentacion_2.idpresentacion = this.id_final)
    console.log(this.agregar_presentacion_2.presentacion = this.crud.presentacion  )
   

  }

  numero_registro(){
    
    this.modalSS.N_presentacion().subscribe(
        (data :any) => {
          console.log(data)
        this.id_venta = data
        this.N_regitro = this.id_venta[0]
        this.id_valor = this.N_regitro.id_pre
        }
    );
  
    this.modalSS.N_presentacion().subscribe(
      (data :any) => {
      this.id_venta = data
      this.N_regitro = this.id_venta[0]
      this.id_valor = this.N_regitro.id_pre
      this.id_valor++;
      this.id_final = 'pre_'+ this.id_valor 
      
     }
   );
   console.log(this.id_final)
  }
}
