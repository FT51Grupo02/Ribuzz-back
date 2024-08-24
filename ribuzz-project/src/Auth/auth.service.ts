/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "src/usuario/usuario.service";

@Injectable()
export class AuthService{
    constructor(
        private userService : UsuarioService, 
        private jwtService: JwtService,
    ){}

    async signUp(){
        
    }
}