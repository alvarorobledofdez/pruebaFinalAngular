import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/Modelo/mascota';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/Servicios/mascota.service';

@Component({
  selector: 'app-alta-mascota',
  templateUrl: './alta-mascota.component.html',
  styleUrls: ['./alta-mascota.component.css']
})
export class AltaMascotaComponent implements OnInit {

  mascota: Mascota;
  constructor(private router: Router, private http: MascotaService) {
    this.mascota = new Mascota();
  }

  ngOnInit() {
  }

  Guardar() {
    this.http.createMascota(this.mascota).subscribe(datos => { this.router.navigate(['listadoMascotas']); });
  }
} 
