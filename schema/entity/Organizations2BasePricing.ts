import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Organization } from './Organization';
import { BasePricing } from './BasePricing';
import type { Relation as TypeRelation } from 'typeorm';

@Entity({ name: 'Organizations2BasePricing', schema: 'lawmate_management' })
export class Organizations2BasePricing {

    @PrimaryColumn({ type: 'int', name: 'org_id' })
    OrgId!: number;

    @Column({ type: 'int', name: 'basePricing_id' })
    BasePricingId!: number;

    @Column({ type: 'int', nullable: true, name: 'min_users' })
    MinUsers!: number;

    @Column({ type: 'int', nullable: true, name: 'month_period' })
    MonthPeriod!: number;

    @OneToOne(() => BasePricing, basePricing => basePricing.Organizations2BasePricing)
    @JoinColumn({ name: 'basePricing_id' })
    BasePricing!: TypeRelation<BasePricing>;

    @OneToOne(() => Organization, Organization => Organization.Organizations2BasePricing)
    @JoinColumn({ name: 'org_id', referencedColumnName: 'OrgId' })
    Organization!: TypeRelation<Organization>;
}
