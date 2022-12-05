import { Component, OnInit } from '@angular/core';
import { CRUDService,INVENTARIO} from '../CRUD/crud.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  modal_insertar_boton:boolean = false;
  filtro:string ='';
  ListarCrud: INVENTARIO[] | any;
  constructor(private CRUDService: CRUDService, private router :Router ) { }

 
  ngOnInit(): void {
    
    this.listarCrud();

    this.CRUDService.$modal_insertar.subscribe((valor)=> (this.modal_insertar_boton = valor));
    
  }
// captura el contenido de mi consulta 
  listarCrud()
  {
    this.CRUDService.getCrud().subscribe(
      res => {
        this.ListarCrud =res;
        console.log(this.ListarCrud)
      }
    );
  }

  eliminar(id:string){

    Swal.fire({
      title: '¿Está seguro?',
      text: "¡No podrás recuperar el articulo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.CRUDService.eliminar_articulo(id).subscribe(
          res => {
            Swal.fire(
              'ELIMINACION EXITOSA!',
              'Su articulo ha sido eliminado.',
              'success'
            )
            this.listarCrud();
          })
      }
    })

  }


  
   modificar(id:string){
     this.router.navigate(['/modal_modificar/'+id])
   }

   open_modal_insertar(){

    this.modal_insertar_boton = true;
  }
}
