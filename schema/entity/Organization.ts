import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, Relation } from 'typeorm';
import { User } from './User';
import { OperationalLog } from './OperationalLog';
import { Transaction } from './Transaction';
import { Billing } from './Billing';
import { InvoiceDetails } from './InvoiceDetails';
import { PaymentInfo } from './PaymentInfo';
import { Domain } from './Domain';
import { Organizations2BasePricing } from './Organizations2BasePricing';
import type { Relation as TypeRelation } from 'typeorm';

@Entity({ name: 'Organizations', schema: 'lawmate_management' })
export class Organization {

    @PrimaryGeneratedColumn({ name: 'org_id' })
    OrgId!: number;

    @Column({ type: 'nvarchar', length: 255, name: 'org_name' })
    OrgName!: string;

    @Column({ type: 'date', nullable: true, name: 'expiration_date' })
    ExpirationDate!: Date | null;

    @Column({ type: 'date', nullable: true, name: 'subscription_date' })
    SubscriptionDate!: Date | null;

    @Column({ type: 'varchar', length: 255, name: 'status' })
    Status!: string;

    @OneToOne(() => Organizations2BasePricing, organizations2BasePricing => organizations2BasePricing.Organization, {
        cascade: ["insert"]
    })
    Organizations2BasePricing!: TypeRelation<Organizations2BasePricing>;

    @OneToMany(() => User, User => User.Organization)
    Users!: Relation<User>[];

    @OneToMany(() => PaymentInfo, paymentInfo => paymentInfo.Organization)
    PaymentInfo!: Relation<PaymentInfo>[];

    @OneToMany(() => Transaction, Transaction => Transaction.Organization)
    Transactions!: Relation<Transaction>[];

    @OneToMany(() => Domain, Domain => Domain.Organization)
    Domains!: Relation<Domain>[];

    @OneToOne(() => InvoiceDetails, invoiceDetails => invoiceDetails.Organization)
    InvoiceDetails!: InvoiceDetails;

    @OneToMany(() => Billing, billing => billing.Organization)
    Billing!: Relation<Billing>[];

    @OneToMany(() => OperationalLog, operationalLog => operationalLog.Organization)
    OperationalLogs!: Relation<OperationalLog>[];
}
