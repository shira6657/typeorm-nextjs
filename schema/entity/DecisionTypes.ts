import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ schema: 'dbo', name: "DecisionType" })
export class DecisionTypes {
    @PrimaryColumn({ type: 'nvarchar', length: 50, name: 'name' })
    Name!: string;

    @Column({ type: "nvarchar", length: 50, name: "abstract_name" })
    AbstractName!: string;

}