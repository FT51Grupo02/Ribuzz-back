/* eslint-disable prettier/prettier */
import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from "typeorm";
import {Users} from "./user.entity"
import { Details } from "./details.entity";

@Entity({
    name:"ordenes"
})

export class Orders{
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    fecha:Date

    @Column()
    modoPago:string;

    @ManyToOne(()=>Users, (user)=>user.id)
    @JoinColumn()
    usuario:Users

    @OneToOne(() => Details)
    @JoinColumn()
    detalle:Details

}