import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export abstract class Laws {

    @PrimaryGeneratedColumn({ name: 'id' })
    Id!: number;

    @Column({ type: 'nvarchar', length: 'MAX', name: 'title' })
    Title!: string;

    @Column({ type: 'int', name: 'word_count' })
    WordCount!: number;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'html_path' })
    HtmlPath!: string;

    @Column({ type: 'nvarchar', length: 'MAX', nullable: true, name: 'txt_path' })
    TxtPath!: string;


    @CreateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP', name: 'insertion_date' })
    InsertionDate!: Date;

    @Column({ type: 'datetime', default: () => `'2000-01-01 00:00:00'`, nullable: true, name: 'modified_date' })
    ModifiedDate!: Date;

    @Column({ type: 'varchar', length: 20, nullable: true, name: 'category' })
    Category!: string;
}
