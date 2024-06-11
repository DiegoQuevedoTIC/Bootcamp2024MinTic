import { Routes } from '@angular/router';
import { PATH } from './core/enum/path.enum';
import { PersonaComponent } from './pages/persona/persona.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { NombreComponent } from './pages/nombre/nombre.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/administrar-productos/productos/productos.component';
import { CrearproductosComponent } from './pages/administrar-productos/crearproductos/crearproductos.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { productosResolver } from './core/resolvers/productos/productos.resolver';
import { UsuariosComponent } from './pages/administrar-usuarios/usuarios/usuarios.component';
import { CrearUsuariosComponent } from './pages/administrar-usuarios/crear-usuarios/crear-usuarios.component';
import { paisesResolver } from './core/resolvers/paises/paises.resolver';


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
      },
      {
        path: `${PATH.CREAR_USUARIOS}/:id`,
        title: 'Crear Usuarios',
        component: CrearUsuariosComponent,
        resolve: {
          paises: paisesResolver,
        },
      },
        {
        path: PATH.PRODUCTOS,
        title: 'Mis productos',
        component: ProductosComponent,
        resolve: {
          productos: productosResolver,
        },
      },
        {
        path: PATH.CREAR_PRODUCTOS,
        title: 'Crear productos',
        component: CrearproductosComponent,
      },
    ]
  }
]
