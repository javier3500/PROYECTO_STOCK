import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModel } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InventarioComponent } from './inventario/inventario.component';
import { MENUINCIOComponent } from './menu-incio/menu-incio.component';
import { BuscadorPipe } from './PIPE/buscador.pipe';
import { ModalInsertarComponent } from './modal-insertar/modal-insertar.component';
import { ModalModificarComponent } from './modal-modificar/modal-modificar.component';
import { ListaBusquedaComponent } from './lista-busqueda/lista-busqueda.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { VerUsuarioComponent } from './ver-usuario/ver-usuario.component';
import { EmpleadoComponent } from './empleado/empleado.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    CarritoComponent,
    InventarioComponent,
    MENUINCIOComponent,
    BuscadorPipe,
    ModalInsertarComponent,
    ModalModificarComponent,
    ListaBusquedaComponent,
    UsuarioComponent,
    VerUsuarioComponent,
    EmpleadoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
