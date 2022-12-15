import { Component, OnInit } from '@angular/core';

import {EquipoService, empleado} from '../service/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent implements OnInit {
  filtro = '';
  Lista_empleados:empleado[] = [];
  confirmacion: boolean = false;

  constructor(private EquipoService:EquipoService) { }

  ngOnInit(): void {
    this.listaEmpleados();
  }

  listaEmpleados(){
    this.EquipoService.getEmpleados().subscribe(
      res=>{
        console.log(res);
         this.Lista_empleados =<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar_empleado(idempleado: string){
    Swal.fire({
      title: '¿Está seguro de borrar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.EquipoService.DeleteEmpleado(idempleado).subscribe(
          res => {
            this.confirmacion = <any>res;
            if(this.confirmacion){
              Swal.fire(
                'ELIMINACION EXITOSA!',
                'Su articulo ha sido eliminado.',
                'success'
              )
              this.listaEmpleados();
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
