import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { Organization } from './Organization';
import type { Relation as TypeRelation } from 'typeorm';

@Entity({ name: "OperationalLog", schema: 'lawmate_management' })

export class OperationalLog {

    @PrimaryGeneratedColumn({ name: 'operationalLog_id' })
    OperationalLogId!: number;

    @Column({ type: 'nvarchar', length: 'MAX', name: 'text' })
    Text!: string;

    @Column({ type: 'varchar', length: 255, name: 'operation_type' })
    OperationType!: string;

    @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', name: 'create_date' })
    CreateDate!: Date;

    @Column({ type: 'varchar', length: 255, nullable: true, name: 'user_id' })
    UserId!: string;

    @Column({ type: 'int', nullable: true, name: 'org_id' })
    OrgId!: number;

    @ManyToOne(() => User, User => User.OperationalLogs)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'Email' })
    User!: TypeRelation<User>;

    @ManyToOne(() => Organization, Organization => Organization.OperationalLogs)
    @JoinColumn({ name: 'org_id', referencedColumnName: 'OrgId' })
    Organization!: TypeRelation<Organization>;
}
