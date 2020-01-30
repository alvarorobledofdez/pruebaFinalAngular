import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Modelo/cliente';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/Servicios/cliente.service';
import { Mascota } from 'src/app/Modelo/mascota';
import { MascotaService } from 'src/app/Servicios/mascota.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente;
  mascota: Mascota;
  constructor(private router: Router, private http: ClienteService, private httpMascota: MascotaService) {
    this.cliente = new Cliente();
    this.mascota = new Mascota();
  }

  ngOnInit() {
  }

  Guardar() {
    this.http.createCliente(this.cliente).subscribe(datos => {
      alert("Mascota vendida");
      this.eliminarMascota(this.mascota);
    });

  }
  eliminarMascota(mascota: Mascota) {
    let id = localStorage.getItem("idMascota");
    this.mascota.id = parseInt(id);

    this.httpMascota.deleteMascota(mascota).subscribe(datos => {
      this.mascota
      this.router.navigate(["listadoMascotas"]);
    });
  }
}
