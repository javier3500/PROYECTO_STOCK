import { Component, OnInit } from '@angular/core';
import { login, EquipoService} from '../service/equipo.service';
import { Router } from '@angular/router';
import { AutenticacionService } from '../autenticacion/autenticacion.service';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  validacion = new FormGroup({
    Usuario:new FormControl ('', Validators.required),
    password:new FormControl ('', Validators.required),
  });

  cadena: string = '';

  _login:login={
    nombreusuario:'',
    contrasena:'',
    idtipo: '',
    contrasenaBD:''
  };

  constructor(
    private EquipoService:EquipoService,
    private router : Router,
    private confirmar:AutenticacionService
  ) { }


  ngOnInit(): void {
    this.EquipoService.cerrar_sesion();
    this.get_config();


  }

  get_config(){
    this.EquipoService.get_config_sistema().subscribe(
      res=>{
         this.EquipoService.confg = JSON.stringify(<any>res);
         console.log(this.EquipoService.confg);
      },
      err=> console.log(err)
    );
  }

  Iniciar(){
    this.EquipoService.login(this._login.nombreusuario).subscribe(
      res=>{
         this.cadena= JSON.stringify(<any>res);
        // console.log(this.cadena);
         this._login.contrasenaBD = this.cadena.substring(0, this.cadena.indexOf(",")).substring(this.cadena.indexOf(":")).replace(/['"]+/g, '').replace(':', '');
         this._login.idtipo = this.cadena.substring(this.cadena.indexOf(","), this.cadena.length).substring(this.cadena.indexOf(":") - 3).replace(/['"]+/g, '').replace('}', '').replace(']', '');
         this.EquipoService.tipo = this._login.idtipo;
         this.iniciarsistema(this._login.contrasena);
      },
      err=> console.log(err)
    )
  }

  iniciarsistema(contrasena: string){
    if(this._login.contrasenaBD == contrasena){
      this.EquipoService.usuarioarray.nombre = this._login.nombreusuario;

      if(this._login.idtipo == 'tip01'){
        this.confirmar.ingresar = false;
        this.EquipoService.crear_sesion();
        this.confirmar.ingresar1 = false;
        this.confirmar.ingresar2 = true;
        //this.confirmar.ingresaradministrador();
      }else{
        if(this._login.idtipo == 'tip02' && this.EquipoService.confg == '[{"disponible":"activado"}]'){
          this.confirmar.ingresar = false;
          this.EquipoService.crear_sesion();
          this.confirmar.ingresar1 = true;
          this.confirmar.ingresar2 = false;
        }else{
          this.router.navigate(['/login']);
          Swal.fire(
            'ACCESO DENEGADO',
            'Ahora no hay sistema.',
            'error'
          )
        };

      }


    }
    else{
      alert("El nombre de usuario o contraseña son incorrectas");
    }
  }

  recuperar(){
    this.router.navigate(['/re-contra']);
  }
}
