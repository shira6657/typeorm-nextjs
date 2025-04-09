import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn, Relation } from 'typeorm';
import { Transaction } from './Transaction';
import { Organization } from './Organization';
import type { Relation as TypeRelation } from 'typeorm';

@Entity({ schema: 'lawmate_management', name: "Billing" })

export class Billing {

    @PrimaryGeneratedColumn({ name: 'billing_id' })
    BillingId!: number;

    @Column({ type: 'int', name: 'org_id' })
    OrgId!: number;

    @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', name: 'billing_date' })
    BillingDate!: Date;

    @Column({ type: 'float', name: 'amount' })
    Amount!: number;

    @Column({ type: 'nvarchar', length: 255, name: 'status' })
    Status!: string;

    @Column({ type: 'nvarchar', length: 255, nullable: true, name: 'invoice_path' })
    InvoicePath!: string;

    @OneToMany(() => Transaction, Transaction => Transaction.Billing)
    Transactions!: Relation<Transaction>[];

    @ManyToOne(() => Organization, Organization => Organization.Billing)
    @JoinColumn({ name: 'org_id', referencedColumnName: 'OrgId' })
    Organization!: TypeRelation<Organization>;
}
