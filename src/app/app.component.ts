import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pruebafinal';

  constructor(private router: Router) {

  }

  abrirAltaUsuarios() {
    this.router.navigate(['altaUsuarios']);
  }

  abrirAltaClientes() {
    this.router.navigate(['altaClientes']);
  }

  abrirAltaMascotas() {
    this.router.navigate(['altaMascotas']);
  }
  
  abrirListadoUsuarios() {
    this.router.navigate(['listadoUsuarios']);
  }

  abrirListadoMascotas() {
    this.router.navigate(['listadoMascotas']);
  }

  abrirListadoClientes() {
    this.router.navigate(['listadoClientes']);
  }

  abrirModificarUsuarios() {
    this.router.navigate(['modificarUsuarios']);
  }

  abrirModificarMascotas() {
    this.router.navigate(['modificarMascotas']);
  }

  abrirModificarClientes() {
    this.router.navigate(['modificarClientes']);
  }

  abrirVenderMascotas(){
    this.router.navigate(['venderMascotas']);
  }
}
