import { Entity, PrimaryColumn, Column } from "typeorm";
import { BasicJudges } from "./abstract/Judges";

@Entity({ name: "Judges" })
export class Judges extends BasicJudges {

  @PrimaryColumn({ type: "nvarchar", length: 255, name: "name" })
  Name!: string;

  @Column({ type: "nvarchar", length: 255, nullable: true, name: "abstract_name" })
  AbstractName!: string;

  @Column({ type: "nvarchar", length: 255, nullable: true, name: "eng_name" })
  EngName?: string;

}

