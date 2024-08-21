/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Events } from "./events.entity";
import {Orders} from "./orders.entity"

@Entity({
    name:"usuario"
})

export class Users{
    @PrimaryGeneratedColumn()
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

    @ManyToMany(()=>Events)
    @JoinColumn()
    eventos: Events[]

    @OneToMany(()=>Orders, (order)=>order.id)
    @JoinColumn()
    orden: Orders[]

}
