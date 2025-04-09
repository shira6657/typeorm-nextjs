import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Unique(['XmlPath'])
export abstract class Articles {

    @PrimaryGeneratedColumn({ name: 'id' })
    Id!: number;

    @Column({ type: 'nvarchar', length: 255, nullable: true })
    Source!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
    Title!: string;

    @Column({ type: 'datetime', nullable: true })
    Date!: Date;

    @Column({ type: 'nvarchar', length: 255, nullable: true, name: 'author_names' })
    AuthorNames!: string;

    @Column({ type: 'int', nullable: true })
    Pages!: number;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
    Abstract!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true })
    Keywords!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'source_info' })
    SourceInfo!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'html_path' })
    HtmlPath!: string;

    @Column({ type: 'int', nullable: true, name: 'paper_id' })
    PaperId!: number;

    @Column({ type: 'nvarchar', length: 255, nullable: true, name: 'xml_path' })
    XmlPath!: string;

    @Column({ type: 'nvarchar', length: 255, nullable: true, name: 'pdf_path' })
    PdfPath!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'txt_path' })
    TxtPath!: string;

    @Column({ type: 'bit', default: false, name: 'is_indexed' })
    IsIndexed!: boolean;
}
