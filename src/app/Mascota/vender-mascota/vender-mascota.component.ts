import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/Modelo/mascota';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vender-mascota',
  templateUrl: './vender-mascota.component.html',
  styleUrls: ['./vender-mascota.component.css']
})
export class VenderMascotaComponent implements OnInit {

  tipo: string = null;
  mascotas: Mascota[];

  constructor(private http: MascotaService, private router: Router) { }

  ngOnInit() {
  }

  buscarTipo() {
    this.http.getMascotasTipo(this.tipo).subscribe(datos => {this.mascotas = datos;})
  }
}
