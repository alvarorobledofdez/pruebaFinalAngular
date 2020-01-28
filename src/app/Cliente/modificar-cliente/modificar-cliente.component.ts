import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Modelo/cliente';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/Servicios/cliente.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  constructor(private router: Router, private http: ClienteService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.http.getClienteUnico(+id).subscribe(datos => { this.cliente = datos })
  }

  Actualizar(cliente: Cliente) {
    this.http.updateCliente(cliente).subscribe(datos => { this.router.navigate(["listadoClientes"]); })
  }
}
