import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../CRUD/crud.service';
import { InventarioComponent } from '../inventario/inventario.component';
import { SCarritoService } from '../S_carrito/s-carrito.service';
@Component({
  selector: 'app-gramajes',
  templateUrl: './gramajes.component.html',
  styleUrls: ['./gramajes.component.css']
})
export class GramajesComponent implements OnInit {

  constructor(private modalSS:SCarritoService) { }

  gramaje : number = 0

  ngOnInit(): void {

  }

  close_modal_insertar(){
    this.modalSS.$gramaje.emit(false);
  }
  enviar(){
    this.modalSS.$gramaje.emit({
      gramaje:this.gramaje
    })
    this.modalSS.$gramaje.emit(false);
  }
}
