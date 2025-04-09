import { AfterLoad, Column, Entity } from "typeorm";
import { Articles } from "./abstract/Articles";

@Entity({ name: "Articles_il" })
export class ArticlesIl extends Articles {

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'title_eng' })
    TitleEng!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'abstract_eng' })
    AbstractEng!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'eng_path' })
    EngPath!: string;

}