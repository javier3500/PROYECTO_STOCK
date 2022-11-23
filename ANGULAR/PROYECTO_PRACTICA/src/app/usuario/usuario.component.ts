import { Component, Input, OnInit } from '@angular/core';

import { usuario, EquipoService } from '../service/equipo.service';
//import {Router} from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

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
    this.EquipoService.addusuario(this._usuario).subscribe();
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

/*
 <select name="" id="" aria-placeholder="cargo">
        <option value="">Usuario normal</option>
        <option value="">Administrador</option>
      </select>
*/
