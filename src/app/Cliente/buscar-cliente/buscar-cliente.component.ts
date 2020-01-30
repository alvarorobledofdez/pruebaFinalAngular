import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Modelo/cliente';
import { ClienteService } from 'src/app/Servicios/cliente.service';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/Servicios/mascota.service';
import { Mascota } from 'src/app/Modelo/mascota';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {

  dni: string = null;
  cliente: Cliente;
  mascota: Mascota;

  constructor(private http: ClienteService, private router: Router, private httpMascota: MascotaService) {
    this.cliente = new Cliente()
    this.mascota = new Mascota()
  }

  ngOnInit() {
  }

  buscarDni() {
    this.http.getClienteDni(this.dni).subscribe(datos => {
    this.cliente = datos;
      this.comprobarDni();
    });

  }

  comprobarDni() {
    if (this.cliente == null) {
      this.router.navigate(["altaClientes"]);
    } else {
      alert('Mascota vendida');
      this.eliminarMascota(this.mascota);

    }
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
