import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material'
import { ClienteService } from '../../services/cliente.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})



export class EditComponent implements OnInit {

  id: String;
  cliente: any = {};
  updateForm: FormGroup;
  value: string;
  viewValue: string;

  constructor(private clienteService: ClienteService, private router: Router,
    private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params.id;
        this.clienteService.getClienteById(this.id).subscribe(res => {
        this.cliente = res;
        this.updateForm.get('Nombre').setValue(this.cliente.Nombre);
        this.updateForm.get('Apellido').setValue(this.cliente.Apellido);
        this.updateForm.get('Sexo').setValue(this.cliente.Sexo);
        this.updateForm.get('FechaRegistro').setValue(this.cliente.FechaRegistro);
        this.updateForm.get('Correo').setValue(this.cliente.Correo);
        this.updateForm.get('Telefono').setValue(this.cliente.Telefono);        
      });
    });
  }

  createForm() {
    this.updateForm = this.fb.group({
      Nombre: ['', Validators.required ],
      Apellido: '',
      Sexo: '',
      FechaRegistro: '',
      Correo: '',
      Telefono: ['', Validators.required ]
   
    });
  }

  updateCliente(Nombre, Apellido, Sexo, FechaRegistro, Correo, Telefono) {
    this.clienteService.updateCliente(this.id, Nombre, Apellido, Sexo, FechaRegistro,
       Correo, Telefono).subscribe(() => {
      this.snackBar.open('Actualizado Con Éxito', 'OK', {
        duration: 3000,
      });
    });
  }
}

