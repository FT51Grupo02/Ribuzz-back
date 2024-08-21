/* eslint-disable prettier/prettier */
import { Entity, Column,PrimaryGeneratedColumn, ManyToMany, JoinColumn } from "typeorm";
import { Details } from "./details.entity";
import {Categories} from "./categories.entity"

@Entity({
    name: "productos"
})

export class Products{
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    descripcion:string

    @Column()
    imagen:string
    
    @Column()
    precio: number

    @Column()
    inventario: number

    @ManyToMany(()=> Details, (detail)=>detail.id)
    @JoinColumn()
    detalle:Details[]

    @ManyToMany(()=> Categories, (category)=>category.nombre)
    @JoinColumn()
    categoria: Categories[]

}