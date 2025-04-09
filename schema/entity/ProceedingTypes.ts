import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ schema: 'dbo', name: "ProceedingType" })
export class ProceedingTypes {
    @PrimaryColumn({ type: 'nvarchar', length: 10, name: 'proceeding_type' })
    ProceedingType!: string;

    @Column({ type: "nvarchar", length: 255, name: "heb_description" })
    HebDescription!: string;

    @Column({ type: "nvarchar", length: 255, name: "eng_description" })
    EngDescription!: string;
}