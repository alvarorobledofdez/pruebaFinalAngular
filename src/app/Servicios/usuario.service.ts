import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  path: string;

  constructor(private http: HttpClient) {
    this.path = 'http://localhost:8080/usuarios';
  }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.path);
  }
  createUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.path, usuario);
  }
  getUsuarioUnico(id: number) {
    return this.http.get<Usuario>(this.path + "/" + id);
  }
  getUsuarioUsername(username: string) {
    return this.http.get<Usuario>(this.path + "/username/" + username);
  }
  updateUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(this.path + "/" + usuario.id, usuario);
  }
  deleteUsuario(usuario: Usuario) {
    return this.http.delete<Usuario>(this.path + "/" + usuario.id);
  }
}
