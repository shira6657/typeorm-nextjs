import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Unique(['RawPath'])
export abstract class Regulations {

    @PrimaryGeneratedColumn({ name: 'id' })
    Id!: number;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'source' })
    Source!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'title' })
    Title!: string;

    @Column({ type: 'datetime', nullable: true, name: 'date' })
    Date!: Date;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'topic' })
    Topic!: string;

    @Column({ type: 'nvarchar', length: 512, name: 'raw_path' })
    RawPath!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'html_path' })
    HtmlPath!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'txt_path' })
    TxtPath!: string;

    @Column({ type: 'bit', default: false, nullable: true, name: 'is_indexed' })
    IsIndexed!: boolean;

    @Column({ type: 'bit', default: true, nullable: true, name: 'is_active' })
    IsActive!: boolean;
}
