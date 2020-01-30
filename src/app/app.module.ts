import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModificarClienteComponent } from './Cliente/modificar-cliente/modificar-cliente.component';
import { ModificarUsuarioComponent } from './Usuario/modificar-usuario/modificar-usuario.component';
import { ModificarMascotaComponent } from './Mascota/modificar-mascota/modificar-mascota.component';
import { AltaClienteComponent } from './Cliente/alta-cliente/alta-cliente.component';
import { AltaUsuarioComponent } from './Usuario/alta-usuario/alta-usuario.component';
import { AltaMascotaComponent } from './Mascota/alta-mascota/alta-mascota.component';
import { ListadoClienteComponent } from './Cliente/listado-cliente/listado-cliente.component';
import { ListadoUsuarioComponent } from './Usuario/listado-usuario/listado-usuario.component';
import { ListadoMascotaComponent } from './Mascota/listado-mascota/listado-mascota.component';
import { VenderMascotaComponent } from './Mascota/vender-mascota/vender-mascota.component';
import { ValidacionCaracteresDirective } from './Validaciones/validacion-caracteres.directive';
import { ValidacionTelefonoDirective } from './Validaciones/validacion-telefono.directive';
import { BuscarClienteComponent } from './Cliente/buscar-cliente/buscar-cliente.component';
import { LoginUsuarioComponent } from './Usuario/login-usuario/login-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ModificarClienteComponent,
    ModificarUsuarioComponent,
    ModificarMascotaComponent,
    AltaClienteComponent,
    AltaUsuarioComponent,
    AltaMascotaComponent,
    ListadoClienteComponent,
    ListadoUsuarioComponent,
    ListadoMascotaComponent,
    VenderMascotaComponent,
    ValidacionCaracteresDirective,
    ValidacionTelefonoDirective,
    BuscarClienteComponent,
    LoginUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
