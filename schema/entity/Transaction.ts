import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Billing } from './Billing'; // Assuming Billing is another entity
import { User } from './User';
import { Organization } from './Organization';
import type { Relation as TypeRelation } from 'typeorm';

@Entity({ name: 'Transactions', schema: 'lawmate_management' })
export class Transaction {

    @PrimaryGeneratedColumn({ name: 'transaction_id' })
    TransactionId!: number;

    @Column({ type: 'varchar', length: 255, name: 'user_id' })
    UserId!: string;

    @Column({ type: 'int', name: 'org_id' })
    OrgId!: number;

    @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', name: 'transaction_date' })
    TransactionDate!: Date;

    @Column({ type: 'float', name: 'amount' })
    Amount!: number;

    @Column({ type: 'int', nullable: true, name: 'billing_id' })
    BillingId!: number;

    @ManyToOne(() => Billing, billing => billing.Transactions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'billing_id' })
    Billing!: TypeRelation<Billing>;

    @ManyToOne(() => Organization, Organization => Organization.Transactions)
    @JoinColumn({ name: 'org_id', referencedColumnName: 'OrgId' })
    Organization!: TypeRelation<Organization>;

    @ManyToOne(() => User, User => User.Transactions)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'Email' })
    User!: TypeRelation<User>;
}
