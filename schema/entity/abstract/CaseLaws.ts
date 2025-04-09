import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, Relation, JoinColumn } from 'typeorm';
import type { Relation as RelationType } from 'typeorm';
// import { LinksIl } from './LinksIl'; // Assuming LinksIl is another entity

export abstract class CaseLaws {

    @PrimaryGeneratedColumn({ name: 'id' })
    Id!: number;

    @Column({ type: 'nvarchar', length: 20, default: "", name: 'proceeding_number' })
    ProceedingNumber!: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', name: 'verdict_date' })
    VerdictDate!: Date;

    @Column({ type: 'nvarchar', length: 20, default: "", nullable: true, name: 'decision_type' })
    DecisionType!: string;

    @Column({ type: 'nvarchar', length: 80, default: "", name: 'sides' })
    Sides!: string;

    @Column({ type: 'nvarchar', length: 'MAX', default: "", nullable: true, name: 'judge_names' })
    JudgeNames!: string;

    @Column({ type: 'int', default: 0, nullable: true, name: 'appeals_count' })
    AppealsCount!: number;

    @Column({ type: 'int', nullable: true, name: 'appealed_by_id' })
    AppealedById!: number;

    @Column({ type: 'int', default: 0, nullable: true, name: 'citations_count' })
    CitationsCount!: number;

    @Column({ type: 'int', default: 0, nullable: true, name: 'cited_by_count' })
    CitedByCount!: number;

    @Column({ type: 'float', default: 0, nullable: true, name: 'score' })
    Score!: number;

    @Column({ type: 'int', default: 0, nullable: true, name: 'word_count' })
    WordCount!: number;

    @Column({ type: 'int', default: 0, nullable: true, name: 'pages' })
    Pages!: number;

    @Column({ type: 'nvarchar', length: 'MAX', default: "", nullable: true, name: 'raw_path' })
    RawPath!: string;

    @Column({ type: 'nvarchar', length: 'MAX', default: "", nullable: true, name: 'eng_path' })
    EngPath!: string;

    @Column({ type: 'nvarchar', length: 'MAX', default: "", nullable: true, name: 'txt_path' })
    TxtPath!: string;

    @Column({ type: 'nvarchar', length: 'MAX', default: "", nullable: true, name: 'reduced_txt_path' })
    ReducedTxtPath!: string;

    @Column({ type: 'nvarchar', length: 'MAX', default: "", nullable: true, name: 'html_path' })
    HtmlPath!: string;

    @CreateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP', name: 'insertion_date' })
    InsertionDate!: Date;

    @Column({ type: 'bit', default: false, nullable: true, name: 'is_private' })
    IsPrivate!: boolean;

    @Column({ type: 'nvarchar', length: 50, nullable: true, name: 'court' })
    Court!: string;

    abstract Summary: string;

    abstract SummaryEng: string;

    abstract AppealedVerdict: RelationType<CaseLaws>;

    abstract Appeals: RelationType<CaseLaws>[];

    abstract Title: string

    abstract DecisionDetails: string;
}
