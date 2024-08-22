export class CreateUserDto {
    nombres: string;
    correo: string;
    contraseña: string;
    fecha: Date;
    rol?: string;
}