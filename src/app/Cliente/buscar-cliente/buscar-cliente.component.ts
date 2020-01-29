import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Modelo/cliente';
import { ClienteService } from 'src/app/Servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {

  dni: string = null;
  cliente: Cliente = new Cliente();

  constructor(private http: ClienteService, private router: Router) {
    this.cliente = new Cliente()
   }

  ngOnInit() {
  }

  buscarDni() {
    this.http.getClienteDni(this.dni).subscribe(datos => {this.cliente = datos;});
    this.comprobarDni();
  }

  comprobarDni(){
    if(this.cliente.dni == null){
      //this.router.navigate(["altaClientes"]);
    } else {
      alert('Mascota vendida');
      this.router.navigate(["listadoMascotas"]);
    }
  }
}
