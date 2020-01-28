import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Modelo/cliente';
import { ClienteService } from 'src/app/Servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styleUrls: ['./listado-cliente.component.css']
})
export class ListadoClienteComponent implements OnInit {

  clientes: Cliente[];
  constructor(private http: ClienteService, private router: Router) { }

  ngOnInit() {
    this.http.getClientes().subscribe(datos => { this.clientes = datos });
  }

  Editar(cliente: Cliente): void {
    localStorage.setItem("id", cliente.id.toString());
    this.router.navigate(["modificarClientes"]);
  }

  Eliminar(cliente: Cliente) {
    this.http.deleteCliente(cliente).subscribe(datos => {
    this.clientes = this.clientes.filter(c => c != cliente)
      alert("cliente eliminado");
      this.router.navigate(["listadoClientes"]);
    });
  }
}
