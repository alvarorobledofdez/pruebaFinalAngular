import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from '../Modelo/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  path: string;

  constructor(private http: HttpClient) {
    this.path = 'http://localhost:8080/mascotas';
  }

  getMascotas() {
    return this.http.get<Mascota[]>(this.path);
  }
  createMascota(mascota: Mascota) {
    return this.http.post<Mascota>(this.path, mascota);
  }
  getMascotaUnica(id: number) {
    return this.http.get<Mascota>(this.path + "/" + id);
  }
  updateMascota(mascota: Mascota) {
    return this.http.put<Mascota>(this.path + "/" + mascota.id, mascota);
  }
  deleteMascota(mascota: Mascota) {
    return this.http.delete<Mascota>(this.path + "/" + mascota.id);
  } 
}
