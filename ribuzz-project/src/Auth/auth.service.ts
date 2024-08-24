/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Users } from "src/Entidades/user.entity";
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class AuthService{
    constructor(
        private userService : UsuarioService, 
        private jwtService: JwtService,
    ){}

    async signUp(user:Partial<Users>){
        
        const{correo,contraseña}=user
       // const foundUser = await this.userService.findOne(correo)
    }
}