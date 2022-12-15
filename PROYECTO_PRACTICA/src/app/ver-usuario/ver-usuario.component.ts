import { Component, OnInit } from '@angular/core';

import {EquipoService,usuario} from '../service/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit {
  constructor(private EquipoService:EquipoService) {}
  Lista: usuario[] = [];
  confirmacion: boolean = false;
  ngOnInit(): void {
    this.listaUsuarios();
  }

  listaUsuarios(){
    this.EquipoService.getUsuario().subscribe(
      res=>{
        console.log(res);
         this.Lista =<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar_usuario(nombreusuario: string){
    Swal.fire({
      title: '¿Está seguro de borrar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.EquipoService.DeteleUsuario(nombreusuario).subscribe(
          res => {
            this.confirmacion = <any>res;
            if(this.confirmacion){
              Swal.fire(
                'ELIMINACION EXITOSA!',
                'Su articulo ha sido eliminado.',
                'success'
              )
              this.listaUsuarios();
            }else{
              Swal.fire(
                'ELIMINACION RECHAZADA!',
                'Su articulo no se pudo eliminar.',
                'error'
              )
            }
          },
          err=> console.log(err)
        );
      }
    })
  }

}
