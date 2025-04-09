import { Column, Entity } from "typeorm";
import { Regulations } from "./abstract/Regulations";

@Entity({ schema: 'dbo', name: "SecondaryLegislation_il" })
export class SecondaryLegislationIl extends Regulations {

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'title_eng' })
    TitleEng!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'topic_eng' })
    TopicEng!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'eng_path' })
    EngPath!: string;
}