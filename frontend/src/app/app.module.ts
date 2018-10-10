import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import {
  MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule,
  MatDividerModule, MatSnackBarModule, MatPaginatorModule, MatTableDataSource, 
  MatDatepickerModule, MatNativeDateModule 
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';


import { ClienteService } from './services/cliente.service';


const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
    declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    //DataTableModule,
    MatPaginatorModule,
    MatNativeDateModule,    
    MatDatepickerModule
    //MatTableDataSource,
    //MatPaginator
          
  ],
  providers: [ClienteService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
