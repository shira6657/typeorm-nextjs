import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, Index } from 'typeorm';
import { CaseArguments2Arguments } from './CaseArguments2Arguments';
import type { Relation } from 'typeorm';

@Entity({ schema: 'dbo', name: 'CaseArguments' })
@Index(['UserId'])
export class CaseArguments {

    @PrimaryGeneratedColumn({ name: 'id' })
    Id!: number;

    @Column({ type: 'nvarchar', length: 255, name: "userId" })
    UserId!: string;

    @Column({ type: 'nvarchar', length: 255, name: "title" })
    Title!: string;

    @CreateDateColumn({ type: 'datetime', name: 'creationDate', default: () => 'CURRENT_TIMESTAMP' })
    CreationDate!: Date;

    @OneToMany(() => CaseArguments2Arguments, caseArguments2Arguments => caseArguments2Arguments.CaseArgument,
        { cascade: ["insert", "remove"] })
    CaseArguments2Arguments!: Relation<CaseArguments2Arguments>[];
}
