/* eslint-disable prettier/prettier */
import { Entity, Column,PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Details } from "./details.entity";
import {Categories} from "./categories.entity"

@Entity({
    name: "productos"
})

export class Products{
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({
        type:'varchar',
        length:250
    })
    descripcion:string

    @Column()
    imagen:string
    
    @Column({
        type:'decimal',
        scale:2,
        precision:10,
        nullable: false
    })
    precio: number

    @Column({
        type:'int',
        nullable:false
    })
    inventario: number


    @ManyToMany(()=> Details, (detail)=>detail.id)
    @JoinTable()
    detalle:Details[]

    @ManyToMany(()=> Categories, (category)=>category.productos)
    @JoinTable()
    categoria: Categories[]

}