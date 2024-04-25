import { PATH } from '../enum/path.enum';
import { MenuInfoInterface } from '../interface/menu-info.interface';

export const MenuRoutes: MenuInfoInterface[] = [
  {
    path: PATH.INICIO,
    title: 'Home',
    icon: 'fa-solid fa-house',
    classCss: 'd-flex justify-content-center aligned-items-center',
    subMenu: [],
  },
  {
    path: PATH.ACERCADE,
    title: ' Nosotros',
    icon: 'fa-regular fa-address-card',
    classCss: 'd-flex justify-content-center aligned-items-center',
    subMenu: [],
  },
  {
    path: PATH.IMAGEN,
    title: 'Galeria',
    icon: 'fa-solid fa-hippo',
    classCss: 'd-flex justify-content-center aligned-items-center',
    subMenu: [
      {
        path: PATH.ARTICULO,
        title: 'Articulos',
        icon: 'fa-solid fa-feather',
        classCss: 'd-flex justify-content-center aligned-items-center',
      },
    ],
  },
  {
    path: PATH.ARTICULO,
    title: 'Articulos',
    icon: 'fa-solid fa-feather',
    classCss: 'd-flex justify-content-center aligned-items-center',
    subMenu: [],
  },
  {
    path: PATH.CONTACTO,
    title: 'Contacto',
    icon: 'fa-solid fa-phone-volume',
    classCss: 'd-flex justify-content-center aligned-items-center',
    subMenu: [],
  },
  {
    path: PATH.PERSONA,
    title: 'Personas',
    icon: 'fa-solid fa-globe',
    classCss: 'd-flex justify-content-center aligned-items-center',
    subMenu: [],
  },
    {
    path: PATH.NOMBRE,
    title: 'Nombres',
    icon: 'fa-solid fa-address-book',
    classCss: 'd-flex justify-content-center aligned-items-center',
    subMenu: [],
  },
    {
    path: PATH.USUARIO,
    title: 'Usuarios',
    icon: 'fa-solid fa-person-chalkboard',
    classCss: 'd-flex justify-content-center aligned-items-center',
    subMenu: [],
  },
];
