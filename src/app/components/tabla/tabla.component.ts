import { Component, Input, OnInit, Pipe, input } from '@angular/core';
import { PersonaInterface } from '../../core/interface/persona.interface';
import { DatePipe } from '@angular/common';
import { UsuarioInterface } from '../../core/interface/usuario.interface';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent implements OnInit {
  @Input() personas: PersonaInterface[] = [];
  @Input() titulo: string ='';

  ngOnInit(): void {

  }
}
