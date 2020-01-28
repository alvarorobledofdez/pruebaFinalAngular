import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/Modelo/mascota';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/Servicios/mascota.service';

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})
export class ModificarMascotaComponent implements OnInit {
 
  mascota: Mascota;
  constructor(private router : Router, private http: MascotaService) { 
    this.mascota = new Mascota();
  }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.http.getMascotaUnica(+id).subscribe(datos =>{this.mascota = datos})
  }

  Actualizar(mascota: Mascota){
    this.http.updateMascota(mascota).subscribe(datos =>{this.router.navigate(["listadoMascotas"]);})
  }

}
