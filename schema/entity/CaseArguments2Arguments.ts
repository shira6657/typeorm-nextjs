import { Entity, PrimaryColumn, ManyToOne, Column, JoinColumn, OneToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { CaseArguments } from './CaseArguments'; // Assuming CaseArguments is another entity
import { LegalArgument } from './LegalArgument'; // Assuming LegalArgument is another entity

@Entity({ schema: 'dbo', name: 'CaseArguments2Arguments' })
export class CaseArguments2Arguments {

    @PrimaryColumn({ name: 'caseArgumentId' })
    CaseArgumentId!: number;

    @PrimaryColumn({ name: 'argumentId' })
    ArgumentId!: number;

    @Column({ type: 'int' })
    Order!: number;

    @ManyToOne(() => CaseArguments, caseArguments => caseArguments.CaseArguments2Arguments
    )
    @JoinColumn({ name: 'caseArgumentId' })
    CaseArgument!: Relation<CaseArguments>;

    @ManyToOne(() => LegalArgument, legalArgument => legalArgument.CaseArguments2Arguments,
        { cascade: ["insert", "remove"] })
    @JoinColumn({ name: 'argumentId' })
    LegalArgument!: Relation<LegalArgument>;
}
