import { Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "Affix" ,schema:'lang_config'})
export class Affix {

    @PrimaryColumn({ type: "nvarchar", length: 6, name: "letter" })
    Letter!: string;

    @PrimaryColumn({ type: "varchar", length: 10, name: "affix_type" })
    AffixType!: string;

    @PrimaryColumn({ type: "varchar", length: 10, name: "lang" })
    Lang!: string;

}
