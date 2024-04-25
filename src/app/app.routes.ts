import { Routes } from '@angular/router';
import { PersonaComponent } from './pages/persona/persona.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { NombreComponent } from './pages/nombre/nombre.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PATH } from './core/enum/path.enum';
import { UsuarioComponent } from './pages/usuario/usuario.component';

export const routes: Routes = [
  {
    path: PATH.HOME,
    title : 'inicio',
    children: [
      {   path: PATH.HOME,
          title : 'inicio',
          component: InicioComponent
      },
      {
        path: PATH.IMAGEN,
        title : 'imagenes',
        component: ImagenesComponent,
      },
      {
        path: PATH.ARTICULO,
        title : 'articulos',
        component: ArticuloComponent,
      },
      {
        path: PATH.ACERCADE,
        title : 'acercaDe',
        component: AcercaDeComponent,
      },
      {
        path: PATH.CONTACTO,
        title : 'contacto',
        component: ContactoComponent,
      },
      {
        path: PATH.PERSONA,
        title : 'personas',
        component: PersonaComponent,
      },
      {
        path: PATH.NOMBRE,
        title : 'nombres',
        component: NombreComponent,
      }      ,
      {
        path: PATH.USUARIO,
        title : 'usuarios',
        component: UsuarioComponent,
      }
    ]
  }
]
