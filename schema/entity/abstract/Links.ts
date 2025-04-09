import { Entity, Column, PrimaryColumn } from "typeorm";

export abstract class Links {

    @PrimaryColumn({ name: "link_id", type: "int" })
    LinkId!: number;

    @Column({ name: "source_id", type: "int" })
    SourceId!: number;

    @Column({ name: "destination_id", type: "int" })
    DestinationId!: number;

    @Column({ name: "link_type", type: "nvarchar", length: 10 })
    LinkType!: string;
}
