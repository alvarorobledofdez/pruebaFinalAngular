import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/Modelo/mascota';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/cliente';

@Component({
  selector: 'app-vender-mascota',
  templateUrl: './vender-mascota.component.html',
  styleUrls: ['./vender-mascota.component.css']
})
export class VenderMascotaComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private http: MascotaService, private router: Router) { }

  ngOnInit() {
  }

  Vender(mascota: Mascota){
    
    this.router.navigate(["venderMascotas"]);
  }

  Actualizar(mascota: Mascota){
    this.http.updateMascota(mascota).subscribe(datos =>{this.router.navigate(["listadoMascotas"]);})
  }
}
