export interface UsuarioInterface{
  nombre: string;
  fechaNacimiento?: Date;
  peso?: string;
  tipoDocumento: string;
  numeroDocumento: string;
  numeroCelular?: string;
  email: string;
  rol?: string;
  password?: string;
}
