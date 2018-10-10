import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})

export class CreateComponent implements OnInit {

  createForm: FormGroup;
  value: string;
  viewValue: string;
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
   
  constructor( private clienteService: ClienteService, private fb: FormBuilder,
    private router: Router, private snackBar: MatSnackBar) {
    
      this.createForm = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',   
      Nombre: '',
      Apellido: '',
      Sexo: '',
      FechaRegistro: '',
      Correo: '',
      Telefono: ''
    });
  
  }
 
  addCliente(Nombre, Apellido, Sexo, FechaRegistro, Correo , Telefono) {
    this.clienteService.addCliente(Nombre, Apellido, Sexo, FechaRegistro, Correo, Telefono).subscribe(() => {
      this.snackBar.open('Grabado Con Éxito', 'OK', {
        duration: 3000,
      });
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }
    
}

