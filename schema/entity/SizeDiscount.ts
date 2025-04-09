import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'SizeDiscounts', schema: 'lawmate_management' })
export class SizeDiscounts {

    @PrimaryColumn({ type: 'varchar', length: 30, name: 'country' })
    Country!: string;

    @PrimaryColumn({ type: 'int', name: 'user_count' })
    UserCount!: number;

    @Column({ type: 'float', name: 'percentage_discount' })
    PercentageDiscount!: number;
}
