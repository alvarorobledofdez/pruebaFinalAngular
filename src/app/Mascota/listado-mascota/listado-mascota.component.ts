import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/Modelo/mascota';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit {

  mascotas: Mascota[];
  constructor(private http: MascotaService, private router: Router) { }

  ngOnInit() {
    this.http.getMascotas().subscribe(datos => { this.mascotas = datos });
  }

  Editar(mascota: Mascota): void {
    localStorage.setItem("id", mascota.id.toString());
    this.router.navigate(["modificarMascotas"]);
  }

  Eliminar(mascota: Mascota) {
    this.http.deleteMascota(mascota).subscribe(datos => {
    this.mascotas = this.mascotas.filter(m => m!=mascota)
      alert("mascota eliminada");
      this.router.navigate(["listadoMascotas"]);
    })
  }
} 
