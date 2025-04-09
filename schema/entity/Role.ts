import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique, Relation } from 'typeorm';
import { Users2Roles } from './Users2Roles';

@Entity({name:'Roles', schema: 'lawmate_management' })
@Unique(['Role'])
export class Role {

    @PrimaryGeneratedColumn({ name: 'id' })
    Id!: number;

    @Column({ type: 'varchar', length: 30, name: 'role' })
    Role!: string;

    @OneToMany(() => Users2Roles, users2Roles => users2Roles.Role)
    Users2Roles!: Relation<Users2Roles>[];
}
