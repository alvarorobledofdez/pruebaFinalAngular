import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoUsuarioComponent } from './Usuario/listado-usuario/listado-usuario.component';
import { ListadoMascotaComponent } from './Mascota/listado-mascota/listado-mascota.component';
import { ListadoClienteComponent } from './Cliente/listado-cliente/listado-cliente.component';
import { AltaUsuarioComponent } from './Usuario/alta-usuario/alta-usuario.component';
import { AltaMascotaComponent } from './Mascota/alta-mascota/alta-mascota.component';
import { AltaClienteComponent } from './Cliente/alta-cliente/alta-cliente.component';
import { ModificarUsuarioComponent } from './Usuario/modificar-usuario/modificar-usuario.component';
import { ModificarMascotaComponent } from './Mascota/modificar-mascota/modificar-mascota.component';
import { ModificarClienteComponent } from './Cliente/modificar-cliente/modificar-cliente.component';
import { VenderMascotaComponent } from './Mascota/vender-mascota/vender-mascota.component';


const routes: Routes = [{
  path: 'listadoUsuarios',
  component: ListadoUsuarioComponent
}, {
  path: 'listadoMascotas',
  component: ListadoMascotaComponent
}, {
  path: 'listadoClientes',
  component: ListadoClienteComponent
},{
  path: 'altaUsuarios',
  component: AltaUsuarioComponent
}, {
  path: 'altaMascotas',
  component: AltaMascotaComponent
}, {
  path: 'altaClientes',
  component: AltaClienteComponent
},{
  path: 'modificarUsuarios',
  component: ModificarUsuarioComponent
}, {
  path: 'modificarMascotas',
  component: ModificarMascotaComponent
}, {
  path: 'modificarClientes',
  component:  ModificarClienteComponent
},{
  path: 'venderMascota',
  component: VenderMascotaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
