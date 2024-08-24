/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn,Column, ManyToMany, JoinTable } from "typeorm";
import {Products} from "./products.entity"

@Entity({
    name: "categorias"
})

export class Categories{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string

    @ManyToMany(() => Products, (product)=>product.categoria)
    @JoinTable()
    productos: Products[]
}