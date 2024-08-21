/* eslint-disable prettier/prettier */
import { Entity,Column,PrimaryGeneratedColumn, ManyToMany, JoinColumn } from "typeorm";
import {Users} from "./user.entity"

@Entity({
    name:"eventos"
})

export class Events{
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    seminario:boolean;

    @Column()
    networking:boolean;

    @ManyToMany(() => Users, (user)=>user.id)
    @JoinColumn()
    usuarios: Users[]
}