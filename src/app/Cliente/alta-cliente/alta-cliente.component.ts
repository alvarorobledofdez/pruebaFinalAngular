import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Modelo/cliente';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/Servicios/cliente.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  constructor(private router: Router, private http: ClienteService) {
  }

  ngOnInit() {
  }

  Guardar() {
    this.http.createCliente(this.cliente).subscribe(datos => { this.router.navigate(['listadoClientes']); });
  }
}
