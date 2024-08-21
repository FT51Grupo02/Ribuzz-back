/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn,Column, ManyToMany, JoinColumn } from "typeorm";
import {Products} from "./products.entity"

@Entity({
    name: "categorias"
})

export class Categories{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nombre: string

    @ManyToMany(() => Products, (product)=>product.id)
    @JoinColumn()
    productos: Products[]
}