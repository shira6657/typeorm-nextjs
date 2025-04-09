import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Answer } from "./Answer";

@Entity({ name: "Answer2Table" })
export class Answer2Table {
    @PrimaryColumn({ name: "TableName" })
    TableName!: string;
    @PrimaryColumn({ name: "AnswerId" })
    AnswerId!: number;
    @PrimaryColumn({ name: "TableId" })
    TableId!: number;
    @PrimaryColumn({ name: "Order" })
    Order!: number;
    @Column({ type: "nvarchar", length: 36, nullable: true, name: "chunkId" })
    ChunkId!: string | null;
    @Column({ type: "float", nullable: true, name: "chunkScore" })
    ChunkScore!: number | null;
    @Column({ type: "nvarchar", length: "max", nullable: true, name: "linked_ids" })
    LinkedIds!: string | null;
    @Column({ type: "nvarchar", length: 36, nullable: true, name: "section" })
    Section!: string | null;
    @Column({ type: "nvarchar", length: "max", nullable: true, name: "linked_sections" })
    LinkedSections!: string | null;

    @ManyToOne(() => Answer, (answer) => answer.Answer2Table, {
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    })
    @JoinColumn({ name: 'AnswerId' })
    Answer!: Relation<Answer>;


}