import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Usuario } from 'src/app/Modelo/usuario';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {

  username: string;
  password: string;
  usuario: Usuario;

  constructor(private router: Router, private http: UsuarioService) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  login() {
    this.http.getUsuarioUsername(this.username).subscribe(datos => {
      this.usuario = datos
      this.comprobarUsuario();
    });
  }

  comprobarUsuario() {
    if (this.usuario.password == this.password) {
      if (this.usuario.rol == 1) {
        localStorage.setItem("permiso", "1");
        this.router.navigate(["listadoUsuarios"]);
      } else if (this.usuario.rol != 1) {
        localStorage.setItem("permiso", "2");
        this.router.navigate(["listadoMascotas"]);
      }
    } else {
      this.router.navigate(["loginUsuario"]);
    }
  }
}
