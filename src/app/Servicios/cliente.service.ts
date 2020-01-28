import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/cliente';

@Injectable({
	providedIn: 'root'
})
export class ClienteService {

	path: string;

	constructor(private http: HttpClient) {
		this.path = 'http://localhost:8080/clientes';
	}

	getClientes() {
		return this.http.get<Cliente[]>(this.path);
	}
	createCliente(cliente: Cliente){
		return this.http.post<Cliente>(this.path, cliente);
	}
	getClienteUnico(id: number) {
		return this.http.get<Cliente>(this.path + "/" + id);
	}
	updateCliente(cliente: Cliente) {
		return this.http.put<Cliente>(this.path + "/" + cliente.id, cliente);
	}
	deleteCliente(cliente: Cliente) {
		return this.http.delete<Cliente>(this.path + "/" + cliente.id);
	}
}
