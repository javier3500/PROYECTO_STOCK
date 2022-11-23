import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { InventarioComponent } from './inventario/inventario.component';
import { MENUINCIOComponent } from './menu-incio/menu-incio.component';
// import { MenuComponent } from './menu/menu.component';
import { ModalInsertarComponent } from './modal-insertar/modal-insertar.component';
import { ModalModificarComponent } from './modal-modificar/modal-modificar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { EmpleadoComponent } from './empleado/empleado.component';

const routes: Routes = [

  {path:'Menu_ventana', component:MENUINCIOComponent},
  {path:'Carrito_ventana', component:CarritoComponent},
  {path:'inventario_ventana', component:InventarioComponent},
  
  {path: 'modal_insertar',component: ModalInsertarComponent},
  {path: 'modal_modificar/:id', component:ModalModificarComponent},
  {path:'usuario', component: UsuarioComponent},
  {path:'empleado', component: EmpleadoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
