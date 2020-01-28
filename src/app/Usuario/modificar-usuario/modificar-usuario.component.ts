import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  usuario: Usuario;
  constructor(private router: Router, private http: UsuarioService) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.http.getUsuarioUnico(+id).subscribe(datos => { this.usuario = datos })
  }

  Actualizar(usuario: Usuario) {
    this.http.updateUsuario(usuario).subscribe(datos => { this.router.navigate(["listadoUsuarios"]); })
  }
}
