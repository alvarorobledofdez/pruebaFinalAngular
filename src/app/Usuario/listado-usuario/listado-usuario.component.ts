import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/usuario';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css']
})
export class ListadoUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private http: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.http.getUsuarios().subscribe(datos => { this.usuarios = datos });
  }

  Editar(usuario: Usuario): void {
    localStorage.setItem("id", usuario.id.toString());
    this.router.navigate(["modificarUsuarios"]);
  }

  Eliminar(usuario: Usuario) {
    this.http.deleteUsuario(usuario).subscribe(datos => {
    this.usuarios = this.usuarios.filter(u => u != usuario)
      alert("usuario eliminado");
      this.router.navigate(["listadoUsuarios"]);
    });
  }
}
