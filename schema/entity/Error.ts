import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: "Errors", schema: 'lawmate_management' })

export class Error {

    @PrimaryGeneratedColumn({ name: 'error_id' })
    ErrorId!: number;

    @Column({ type: 'varchar', length: 'MAX', name: 'text' })
    Text!: string;

    @Column({ type: 'varchar', length: 255, name: 'error_type' })
    ErrorType!: string;

    @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', name: 'create_date' })
    CreateDate!: Date;

    @Column({ type: 'varchar', length: 255, nullable: true, name: 'file_info' })
    FileInfo!: string;

    @Column({ type: 'varchar', length: 'MAX', nullable: true, name: 'additional_info' })
    AdditionalInfo!: string;

    @Column({ type: 'varchar', length: 255, nullable: true, name: 'user_id' })
    UserId!: string;
}
