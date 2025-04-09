import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Relation } from 'typeorm';
import { Organizations2BasePricing } from './Organizations2BasePricing';

@Entity({name:"BasePricing", schema: 'lawmate_management' })
export class BasePricing {

    @PrimaryGeneratedColumn({ name: 'basePricing_id' })
    BasePricingId!: number;

    @Column({ type: 'nvarchar', length: 255, name: 'pricing_type' })
    PricingType!: string;

    @Column({ type: 'float', name: 'base_price' })
    BasePrice!: number;

    @Column({ type: 'varchar', length: 30, name: 'country' })
    Country!: string;

    @OneToMany(() => Organizations2BasePricing, organizations2BasePricing => organizations2BasePricing.BasePricing)
    Organizations2BasePricing!: Relation<Organizations2BasePricing>[];
}
