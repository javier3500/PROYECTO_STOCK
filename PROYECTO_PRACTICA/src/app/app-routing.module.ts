import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarritoComponent } from './carrito/carrito.component';
import { InventarioComponent } from './inventario/inventario.component';

import { ModalInsertarComponent } from './modal-insertar/modal-insertar.component';
import { ModalModificarComponent } from './modal-modificar/modal-modificar.component';
import { ListaBusquedaComponent } from './lista-busqueda/lista-busqueda.component';
import { GananciasComponent } from './ganancias/ganancias.component';


import { UsuarioComponent } from './usuario/usuario.component';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ReContraComponent } from './re-contra/re-contra.component';
import { VerEmpleadosComponent } from './ver-empleados/ver-empleados.component';
import { SistemaComponent } from './sistema/sistema.component';

import { LoginComponent } from './login/login.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';

import { MenuComponent } from './menu/menu.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';

const routes: Routes = [

  {path:'Carrito_ventana', component:CarritoComponent},
  {path:'inventario_ventana', component:InventarioComponent},
  {path: 'modal_insertar',component: ModalInsertarComponent},
  {path: 'modal_modificar/:id', component:ModalModificarComponent},
  {path:'lista_articulos', component:ListaBusquedaComponent},
  {path:'ganancias', component:GananciasComponent},

  {path:'empleado', component: EmpleadoComponent},
  {path:'usuario', component: UsuarioComponent},
  {path:'verusuarios', component: VerUsuarioComponent},
  {path:'verempleado', component: VerEmpleadosComponent},
  {path:'config', component: SistemaComponent},


  {path:'re-contra', component: ReContraComponent},
  {path:'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
