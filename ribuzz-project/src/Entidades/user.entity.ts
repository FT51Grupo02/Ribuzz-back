/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Events } from "./events.entity";
import {Orders} from "./orders.entity"

@Entity({
    name:"usuario"
})

export class Users{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    nombre: string;

    @Column()
    correo:string;

    @Column()
    contraseña:string;

    @Column()
    fecha:Date;

    @Column()
    rol:string;

    @Column({
        nullable:true
    })
    foto:string

    @ManyToMany(()=>Events)
    @JoinColumn()
    eventos: Events[]

    @OneToMany(()=>Orders, (order)=>order.id)
    @JoinColumn()
    orden: Orders[]

}
