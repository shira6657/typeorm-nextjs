import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Organization } from './Organization';
import type { Relation as TypeRelation } from 'typeorm';

@Entity({ name: 'PaymentInfo', schema: 'lawmate_management' })
@Unique(['Token'])
export class PaymentInfo {

    @PrimaryGeneratedColumn({ name: 'PaymentInfo_id' })
    PaymentInfoId!: number;

    @Column({ type: 'nvarchar', length: 255, name: 'token' })
    Token!: string;

    @Column({ type: 'int', name: 'expire_month' })
    ExpireMonth!: number;

    @Column({ type: 'int', name: 'expire_year' })
    ExpireYear!: number;

    @Column({ type: 'nvarchar', length: 10, name: 'last_4_digits' })
    Last4Digits!: string;

    @Column({ type: 'int', name: 'org_id' })
    OrgId!: number;

    @Column({ type: 'bit', default: false, name: 'default_payment' })
    DefaultPayment!: boolean;

    @Column({ type: 'nvarchar', length: 10, name: 'currency' })
    Currency!: string;

    @Column({ type: 'varchar', length: 10, name: 'card_type' })
    CardType!: string;

    @Column({ type: 'bit', default: false, name: 'is_deleted' })
    IsDeleted!: boolean;

    @ManyToOne(() => Organization, Organization => Organization.PaymentInfo)
    @JoinColumn({ name: 'org_id', referencedColumnName: 'OrgId' })
    Organization!: TypeRelation<Organization>;
}
