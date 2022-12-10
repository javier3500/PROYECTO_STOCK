import { Component, OnInit } from '@angular/core';
import { EquipoService, sistema } from '../service/equipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent implements OnInit {


  confirmacion: boolean = false;
  idsistema: string = 'sistem';

  _sistema : sistema ={
    disponible: ''
  }

  constructor(private EquipoService: EquipoService) { }

  ngOnInit(): void {
  }

  activar(){
    this._sistema.disponible = 'activado';
    this.EquipoService.config_sistema(this.idsistema, this._sistema).subscribe(
      res=>{
        this.confirmacion = <any>res;
        if(this.confirmacion){
          Swal.fire(
            '¡SISTEMA HABILITADO!',
            'El sistema se encuentra disponible.',
            'success'
          )
        }else{
          Swal.fire(
            '¡ERROR!',
            'El sistema no se pudo activar.',
            'error'
          )
        }
      },
      err=> console.log(err)
    );
  }

  desactivar(){
    this._sistema.disponible = 'desactivado';
    this.EquipoService.config_sistema(this.idsistema, this._sistema).subscribe(
      res=>{
        this.confirmacion = <any>res;
        if(this.confirmacion){
          Swal.fire(
            '¡SISTEMA DESABILITADO!',
            'El sistema ya no está disponible.',
            'success'
          )
        }else{
          Swal.fire(
            '¡ERROR!',
            'El sistema no se pudo desactivar.',
            'error'
          )
        }
      },
      err=> console.log(err)
    );
  }

}

