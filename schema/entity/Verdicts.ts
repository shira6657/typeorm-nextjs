import { Column, Entity, Unique, ManyToOne, OneToMany, JoinColumn, AfterLoad } from "typeorm";
import type { Relation } from "typeorm";
import { CaseLaws } from "./abstract/CaseLaws";

@Entity({ schema: 'dbo', name: "Verdicts_il" })
@Unique(['ProceedingNumber', 'ProceedingType', 'VerdictDate', 'Sides'])
export class Verdicts_il extends CaseLaws {

    @Column({ type: 'nvarchar', length: 10, default: "", name: 'proceeding_type' })
    ProceedingType!: string;

    @Column({ type: 'nvarchar', length: 20, nullable: true, name: 'district' })
    District!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'summary_heb' })
    Summary!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'summary_eng' })
    SummaryEng!: string;

    @ManyToOne(() => Verdicts_il, verdicts_il => verdicts_il.Appeals)
    @JoinColumn({ name: 'appealed_by_id' })
    AppealedVerdict!: Relation<Verdicts_il>;

    @OneToMany(() => Verdicts_il, verdicts_il => verdicts_il.AppealedVerdict)
    Appeals!: Relation<Verdicts_il>[];

    @AfterLoad()
    generateMainPath(): void {
        this.Title = this.ProceedingType + " " + this.ProceedingNumber;
        this.DecisionDetails = this.DecisionType + " " + this.Court + " " + (this.District ?? "");
    }
    Title!: string;
    DecisionDetails!: string;
}