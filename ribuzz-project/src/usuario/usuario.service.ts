import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Users } from '../Entidades/user.entity';
import { CreateUserDto } from './User.dto/Create-user.dto';
import { UpdateUserDto } from './User.dto/update-user.dto';
import { Events } from '../Entidades/events.entity';
import { Orders } from '../Entidades/orders.entity';

@Injectable()
export class UsuarioService {
    constructor(
    @InjectRepository(Users)
    private readonly usuarioRepository: Repository<Users>,
    @InjectRepository(Events)
    private readonly eventsRepository: Repository<Events>,
    @InjectRepository(Orders)
    private readonly ordersRepository: Repository<Orders>,
    ) {}

    async create(user: Partial<Users>){
        const newUser = await this.usuarioRepository.save(user);
        const {contraseña, rol, ... userPassword} = newUser;
        return userPassword
    }


    async findAll(page:number, limit:number) {
        let users = await this.usuarioRepository.find()
        const start = (page - 1) * limit
        const end = start + +limit
        users = users.slice(start,end)

        return users.map(({contraseña, rol, ...user }) => user)
    }

    async findOne(id: number) {
    const usuario = await this.usuarioRepository.findOne({
        where: { id }
    });
    if (!usuario) {
        throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
    }
    const {contraseña, rol, ... userPassword} = usuario;
    return userPassword
    }

    async update(id: number, updateUsuarioDto: UpdateUserDto) {

        const existingUser = await this.usuarioRepository.findOneBy({ id });
        
        if (!existingUser) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
        }
    
        const updatedUser = { ...existingUser, ...updateUsuarioDto };
        
        await this.usuarioRepository.save(updatedUser);
    
        const { contraseña, ...userWithoutPassword } = updatedUser;
    
        return userWithoutPassword;
    }

    async deleteUser(id: number){
        const result = await this.usuarioRepository.delete(id);
    
        if (result.affected === 0) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado.`);
        }
    
        return result;
        }

}
