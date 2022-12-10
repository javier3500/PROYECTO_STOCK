import { Component, Input, OnInit } from '@angular/core';

import { usuario, EquipoService } from '../service/equipo.service';
//import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  confirmacion: boolean = false;
  lista: string []=["Administrador","Usuario común"];
  seleccionado: string = "";

  _usuario:usuario={
    nombreusuario:'',
    contrasena:'',
    estado:'desconectado',
    tipo:''
  };

  ngOnInit(): void {
    this.listaUsuarios();
  }

  constructor(private EquipoService:EquipoService){}

  agregarUsuario(){

    if(this.seleccionado == 'Administracion'){
      this._usuario.tipo = 'tip01';
    }else{
      this._usuario.tipo = 'tip02';
    }

    this.EquipoService.addusuario(this._usuario).subscribe(
      res=>{
        this.confirmacion = <any>res;
        if(this.confirmacion){
          Swal.fire(
            '¡REGISTRO EXITOSA!',
            'El usuario ha sido agregado.',
            'success'
          )
        }else{
          Swal.fire(
            'REGISTRO RECHAZADO',
            'El usuario ya existe.',
            'error'
          )
        }
      },
      err=> console.log(err)
    );
    //this.router.navigate(['/inicio']);
  }

  listaUsuarios(){
    this.EquipoService.getUsuario().subscribe(
      res=>{
        console.log(res);
      },
      err=> console.log(err)
    );
  }
}
