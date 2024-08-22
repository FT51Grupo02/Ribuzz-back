/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from "src/Entidades/categories.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoriesService {
    constructor(@InjectRepository(Categories) private readonly categoriesRepository: Repository<Categories>) {}

    async imputCategory(nombre: string): Promise<Categories> {
        // Detectar si la casilla no está vacía
        console.log(nombre)
        if (!nombre) {
            throw new BadRequestException('La casilla nombre no puede quedar vacía');
        }

        // Detectar si la categoría existe previamente
        const existentCategory = await this.categoriesRepository.findOne({where:{nombre}});
        if (existentCategory) {
            throw new BadRequestException('La categoría ya se encuentra registrada');
        }

        // Crear y guardar la nueva categoría
        const newCategory = this.categoriesRepository.create({nombre});
        return await this.categoriesRepository.save(newCategory);
    }

    
}
