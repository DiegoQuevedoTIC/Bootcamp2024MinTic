import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from "./pages/inicio/inicio.component";
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { NombreComponent } from './pages/nombre/nombre.component';
import { PersonaComponent } from './pages/persona/persona.component';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { RolDirective } from './core/directives/rol/rol.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
              InicioComponent,
              ArticuloComponent,
              NombreComponent,
              PersonaComponent,
              HeaderComponent,
              FooterComponent ,
              RolDirective,
    ],
})
export class AppComponent {
  title = 'proyecto-clase';

  public nombre:string = 'Diego Quevedo';
}
