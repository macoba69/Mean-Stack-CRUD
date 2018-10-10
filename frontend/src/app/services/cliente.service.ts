import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  uri = 'http://localhost:4000';
  
  constructor(private http: HttpClient) { }
  

    getClientes() {
      return this.http.get(`${this.uri}/clientes`);
    }


   getClienteById(id) {
     return this.http.get(`${this.uri}/clientes/${id}`);
   } 

  addCliente(Nombre, Apellido, Sexo, FechaRegistrada, Correo, Telefono) {
    const cliente = {
      Nombre: Nombre,
      Apellido: Apellido,
      Sexo: Sexo,
      FechaRegistrada: FechaRegistrada,
      Correo: Correo,
      Telefono: Telefono
    };
    return this.http.post(`${this.uri}/clientes/add`, cliente);
  }

  updateCliente(id, Nombre, Apellido, Sexo, FechaRegistrada, Correo, Telefono) {
    const cliente = {
      Nombre: Nombre,
      Apellido: Apellido,
      Sexo: Sexo,
      FechaRegistrada: FechaRegistrada,
      Correo: Correo,
      Telefono: Telefono
    };
    return this.http.post(`${this.uri}/clientes/update/${id}`, cliente);
  }


  deleteCliente(id) {
    return this.http.get(`${this.uri}/clientes/delete/${id}`);
  }
}


  


