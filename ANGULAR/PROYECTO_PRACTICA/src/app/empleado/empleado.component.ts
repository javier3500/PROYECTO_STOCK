import { Component, OnInit } from '@angular/core';
import { empleado, EquipoService } from '../service/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {


  confirmacion: boolean = false;
  _empleado: empleado= {
    idempleado: '',
    nombre: '',
    apellido1: '',
    apellido2: '',
    sexo: '',
    fechanacimiento:'',

  };

  constructor(private EquipoService:EquipoService) { }

  ngOnInit(): void {
  }

  agregarEmpleado(){
    this.EquipoService.addEmpleado(this._empleado).subscribe(
      res=>{
        this.confirmacion = <any>res;
        if(this.confirmacion){
          Swal.fire(
            '¡REGISTRO EXITOSA!',
            'El empleado ha sido registrado.',
            'success'
          )
        }else{
          Swal.fire(
            'REGISTRO RECHAZADO',
            'El empleado ya existe.',
            'error'
          )
        }

      },
      err=> console.log(err)
    );
    //this.router.navigate(['/inicio']);
  }

}

