import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/usuario';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  usuario: Usuario;
  constructor(private router: Router, private http: UsuarioService) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
  }

  Guardar() {
    this.http.createUsuario(this.usuario).subscribe(datos => { this.router.navigate(['listadoUsuarios']); });
  }
}
