import { Entity, Column, ManyToOne, JoinColumn, Unique, PrimaryColumn } from 'typeorm';
import { Role } from './Role';
import { User } from './User';
import type { Relation as TypeRelation } from 'typeorm';

@Entity({ name: 'Users2Roles', schema: 'lawmate_management' })
@Unique(['UserId', 'RoleId'])
export class Users2Roles {

    @PrimaryColumn({ type: 'varchar', length: 255, name: 'user_id' })
    UserId!: string;

    @PrimaryColumn({ type: 'int', name: 'role_id' })
    RoleId!: number;

    @ManyToOne(() => Role, (Role) => Role.Users2Roles, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'role_id' })
    Role!: TypeRelation<Role>;

    @ManyToOne(() => User, (User) => User.Users2Roles)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'Email' })
    User!: TypeRelation<User>;
}
