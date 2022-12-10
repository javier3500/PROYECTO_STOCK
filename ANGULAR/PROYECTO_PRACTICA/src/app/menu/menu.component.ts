import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EquipoService } from '../service/equipo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private EquipoService:EquipoService) { }

  ngOnInit(): void {
    this.router.navigate(['/Carrito_ventana']);
  }

  cerrarsesion(){
    this.router.navigate(['/login']);
  }

}
