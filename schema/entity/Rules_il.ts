import { Column, Entity } from "typeorm";
import { Laws } from "./abstract/Laws";

@Entity({ schema: 'dbo', name: "Rules_il" })
export class Rules_il extends Laws {

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'eng_path' })
    EngPath!: string;

    @Column({ type: 'varchar', length: 400, nullable: true, name: 'title_eng' })
    TitleEng!: string;
}