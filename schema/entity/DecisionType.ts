import { Entity, PrimaryColumn, Column, Unique } from 'typeorm';

@Entity({ name: "DecisionType" })
@Unique(['Name'])
export class DecisionType {

    @PrimaryColumn({ type: 'nvarchar', length: 50, name: 'name' })
    Name!: string;

    @Column({ type: 'nvarchar', length: 50, name: 'abstract_name' })
    AbstractName!: string;

}
