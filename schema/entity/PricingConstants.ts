import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({name:'PricingConstants', schema: 'lawmate_management' })
export class PricingConstants {

    @PrimaryColumn({ type: 'nvarchar', length: 255, name: 'key' })
    Key!: string;

    @PrimaryColumn({ type: 'varchar', length: 30, name: 'country' })
    Country!: string;

    @Column({ type: 'float', name: 'value' })
    Value!: number;
}
