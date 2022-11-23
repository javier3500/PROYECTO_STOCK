import { Component, OnInit } from '@angular/core';

import {EquipoService,usuario} from '../service/equipo.service';


@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit {

  constructor(private EquipoService:EquipoService) {}
  Lista: usuario[] = [];

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

}
