/* eslint-disable prettier/prettier */
import { Body, Post, Controller } from "@nestjs/common";
import { CategoriesService } from "./categories.services";


@Controller("categorias")
export class CategoriesControl{
    constructor(private categoriesServive: CategoriesService) {}

    @Post('/')
    findCategory(@Body('nombre') nombre:string){
        return this.categoriesServive.findCategory(nombre)
    }

    @Post('/agregar')
    imputCategory(@Body('nombre') nombre: string){
        return this.categoriesServive.imputCategory(nombre)
    }
}