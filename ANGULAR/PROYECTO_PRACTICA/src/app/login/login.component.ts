import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { AutenticacionService } from '../autenticacion/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(private fb:FormBuilder, private confirmar:AutenticacionService) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
   
  }

  private createMyForm(): FormGroup{

    return this.fb.group({

      usuario:["",[Validators.required]],
      password:["",[Validators.required]]

    });

  }

  public submitFormulario(){
  
    if(this.myForm.invalid){
      alert("USUARIO INVALIDO");
      return;

    }
   
    if(!this.confirmar.ingresaraplicativo(this.myForm.value)){
      alert("usuario o contraseña invalido");
    }
    //muestra mi datos correctos
    
  }

  

}


