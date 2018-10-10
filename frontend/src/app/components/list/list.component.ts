import { Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatPaginator, MatTableDataSource } from '@angular/material';
import { Cliente } from '../../services/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import {Http} from "@angular/http";

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
   clientes: Cliente[];
   displayedColumns: string[] = ['Nombre', 'Apellido', 'Sexo', 'FechaRegistro', 'Correo', 'Telefono', 'actions'];
   //dataSource = new MatTableDataSource<Cliente>();
   //@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clienteService: ClienteService, private router: Router, 
  private snackBar: MatSnackBar){ }
 
 
  ngOnInit(): void { 
    this.fetchClientes();
  }

  //TODO: fetchIssue: este método se usa para recuperar la lista completa de problemas para mostrar
 
      fetchClientes() {
         this.clienteService
         .getClientes()
          .subscribe((data: Cliente[]) => {
            this.clientes = data;
            console.log('Data requested ...');
            console.log(this.clientes);
         });
      }

  //TODO: El método editIssue se usa como el método del controlador de eventos,
  //TODO: Para el evento click del enlace de edición que se incluye en el resultado
 
    editCliente(id) {
      this.router.navigate([`/edit/${id}`]);
     }

  //TODO: El método del controlador de eventos deleteIssue está conectado al evento,
  //TODO: click del enlace de eliminación
  
    deleteCliente(id) {
      this.clienteService.deleteCliente(id).subscribe(() => {
        this.snackBar.open('Eliminado Con Éxito', 'OK', {
          duration: 3000,
        });
        this.fetchClientes();
      });
    }
}

