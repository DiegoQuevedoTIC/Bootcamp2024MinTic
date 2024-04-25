import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { UsuarioInterface } from '../../core/interface/usuario.interface';
import { PersonaInterface } from '../../core/interface/persona.interface';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  usuarios: PersonaInterface[] = [];

  ngOnInit(): void {

    this.usuarios = [
      {
        nombre: 'Fernanda Garzon',
        fechaNacimiento: new Date('2023-12-21'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '80810994',
        numeroCelular: '3142945549',
        email: 'diego01andres@hotmail.com',
        peso: '39',
      },
      {
        nombre: 'Julian Garzon',
        fechaNacimiento: new Date('2022-12-01'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '50810994',
        numeroCelular: '2142945549',
        email: 'diego01andres@msm.com',
        peso: '13',
      },
      {
        nombre: 'Stefany Garzon',
        fechaNacimiento: new Date('2020-11-01'),
        tipoDocumento: 'Cedula Ciudadania',
        numeroDocumento: '30810994',
        numeroCelular: '1142945549',
        email: 'diego01andres@gmail.com',
        peso: '33',
      },
      {
        nombre: 'Yamil Garzon',
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