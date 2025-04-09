import { Column, Entity, Unique } from "typeorm";
import { Courts } from "./abstract/Courts";

@Entity({ schema: 'dbo', name: "Courts" })
export class Court_il extends Courts {
    @Column({ type: 'nvarchar', length: 50, nullable: true, name: 'eng_name' })
    EngName!: string;
}