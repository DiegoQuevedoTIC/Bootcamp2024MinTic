import { Component } from '@angular/core';

@Component({
  selector: 'app-nombre',
  standalone: true,
  imports: [],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.css'
})
export class NombreComponent {
nombres = [
  { nombre: 'María González', edad: 30, estatura: 165 },
  { nombre: 'Juan Pérez', edad: 35, estatura: 175 },
  { nombre: 'Laura Martínez', edad: 28, estatura: 160 },
  { nombre: 'Carlos Rodríguez', edad: 40, estatura: 180 },
  { nombre: 'Ana López', edad: 32, estatura: 170 },
  { nombre: 'David Fernández', edad: 38, estatura: 175 },
  { nombre: 'Sofía García', edad: 27, estatura: 162 },
  { nombre: 'Pablo Sánchez', edad: 33, estatura: 178 },
  { nombre: 'Elena Ramírez', edad: 31, estatura: 168 },
  { nombre: 'Diego Gómez', edad: 36, estatura: 172 }
]
}
