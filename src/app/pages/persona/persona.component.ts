import { Component, OnInit } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css',
})
export class PersonaComponent implements OnInit {
  personas: PersonaInterface[] = [];
  tituloTabla: string='Listado de Personas Unicas';
  
  ngOnInit(): void {
    this.personas = [
      {
        nombre: 'Diego Quevedo',
        fechaNacimiento: new Date('2023-12-21'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '80810994',
        numeroCelular: '3142945549',
        email: 'diego01andres@hotmail.com',
        peso: '39',
      },
      {
        nombre: 'Juan Perez',
        fechaNacimiento: new Date('2022-12-01'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '50810994',
        numeroCelular: '2142945549',
        email: 'diego01andres@msm.com',
        peso: '13',
      },
      {
        nombre: 'Victor Carranza',
        fechaNacimiento: new Date('2020-11-01'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '30810994',
        numeroCelular: '1142945549',
        email: 'diego01andres@gmail.com',
        peso: '33',
      },
      {
        nombre: 'Andres Perez',
        fechaNacimiento: new Date('2003-12-01'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '40810994',
        numeroCelular: '5142945549',
        email: 'diego01andres@msm.com',
        peso: '23',
      },
    ];
  }
}
