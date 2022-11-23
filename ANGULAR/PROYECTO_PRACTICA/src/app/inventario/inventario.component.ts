import { Component, OnInit } from '@angular/core';
import { CRUDService,INVENTARIO} from '../CRUD/crud.service';
import { Router } from '@angular/router';

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
    this.CRUDService.eliminar_articulo(id).subscribe(
      res => {
        console.log('Articulo eliminado'+ ' = ' +id );
        this.listarCrud();
      });

  }


  
   modificar(id:string){
     this.router.navigate(['/modal_modificar/'+id])
   
   }

   open_modal_insertar(){

    this.modal_insertar_boton = true;
  }
}
