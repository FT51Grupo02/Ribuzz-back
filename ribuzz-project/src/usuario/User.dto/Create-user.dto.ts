/* eslint-disable prettier/prettier */
export class CreateUserDto {
    nombre: string;
    correo: string;
    contraseña: string;
    fecha: Date;
    rol?: string;
}