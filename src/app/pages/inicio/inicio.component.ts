import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { ImagenesComponent } from '../imagenes/imagenes.component';
import { RouterLink } from '@angular/router';
import { PersonaComponent } from '../persona/persona.component';
import { ArticuloComponent } from '../articulo/articulo.component';
import { NombreComponent } from '../nombre/nombre.component';
import { Router } from 'express';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ImagenesComponent,RouterLink,PersonaComponent,ArticuloComponent,NombreComponent, PersonaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  mostrarTitulo:boolean = true;

    personas =[
    {
      nombre:   'Lupe',
      edad:         15,
      ciudad: 'Bogota',
      documento:  1234
    },
    {
      nombre:   'Carlo',
      edad:         19,
      ciudad: 'Cali',
      documento:  5678
    },
    {
      nombre:   'Juan',
      edad:         23,
      ciudad: 'Medellin',
      documento:  8907
    },
    {
      nombre:   'Fernanda',
      edad:         55,
      ciudad: 'Bogota',
      documento:  1290
    }
    ];

abrirModal()
{
  Swal.fire({
    title: "Esta probando",
    text: "Este es la primera accion de un modal",
    icon: "success"
  });
}



}
