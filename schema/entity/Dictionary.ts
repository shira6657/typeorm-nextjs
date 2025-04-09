import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: "Dictionary",schema:'lang_config' })
export class Dictionary {

    @PrimaryColumn({ type: 'nvarchar', length: 100, name: 'key' })
    Key!: string;

    @Column({ type: 'nvarchar', length: 100, name: 'value' })
    Value!: string;

    @PrimaryColumn({ type: "varchar", length: 10, name: "lang" })
    Lang!: string;

}
