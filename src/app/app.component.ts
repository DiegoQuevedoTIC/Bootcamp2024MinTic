import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicioComponent } from "./pages/inicio/inicio.component";
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { NombreComponent } from './pages/nombre/nombre.component';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, InicioComponent, ArticuloComponent, NombreComponent, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'proyecto-clase';

  public nombre:string = 'Diego Quevedo';
}
