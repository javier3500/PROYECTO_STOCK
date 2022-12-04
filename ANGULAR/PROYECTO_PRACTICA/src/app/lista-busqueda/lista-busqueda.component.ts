import { Component, OnInit } from '@angular/core';
import { CRUDService,INVENTARIO} from '../CRUD/crud.service';
import { SCarritoService } from '../S_carrito/s-carrito.service';
@Component({
  selector: 'app-lista-busqueda',
  templateUrl: './lista-busqueda.component.html',
  styleUrls: ['./lista-busqueda.component.css']
})
export class ListaBusquedaComponent implements OnInit {
  filtro:string ='';
  ListarCrud: INVENTARIO[] | any;

  

  constructor(private CRUDService: CRUDService, private Carga :SCarritoService) {
      
   }

  ngOnInit(): void {
    this.listarCrud();
  }

  close_lista_busqueda(){
    this.Carga.$lista_articulos.emit(false);
    //console.log("asdadawda")
  }

  // captura el contenido de mi consulta 
  listarCrud()
  {
    this.CRUDService.getCrud().subscribe(
      res => {
        //console.log(res)
     
        this.ListarCrud =<any>res;
        
      }
    );

  }

  agregar_lista(
    id_articulo:string,
    producto:string,
    existencia:string,
    presentacion:string,
    preciocompra:string,
    precioventa:string){
      let i : number = -1
      //console.log(id_articulo)
      this.Carga.disparador_de_lista.emit({
      
      idarticulo : id_articulo,
      producto :producto,
      existencia:existencia,
      precioventa:precioventa,
      preciocompra:preciocompra,
      presentacion:presentacion
     })

     this.Carga.suma_de_valores.emit({
      existencia:existencia
     })
      

  }

}
