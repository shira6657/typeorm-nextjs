import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Question } from './Question';

@Entity({ name: "Conversation" })
@Index('IDX_UserId', ['UserId'])
export class Conversation {
  @PrimaryGeneratedColumn({ name: 'ConvId' })
  ConvId!: number;

  @Column({ name: 'UserId', type: 'varchar', length: 255, nullable: true })
  UserId?: string;

  @Column({ name: 'ConvTitle', type: 'nvarchar', length: 255, nullable: true })
  ConvTitle?: string;

  @Column({
    name: 'CreationDate',
    type: 'datetime',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  CreationDate?: Date;

  @Column({
    name: 'ModificationDate', type: 'datetime', nullable: true,
  })
  ModificationDate?: Date;

  @Column({ name: 'ConvType', type: 'nvarchar', length: 50, nullable: true })
  ConvType?: string;

  @OneToMany(() => Question, (question) => question.Conversation)
  Questions!: Relation<Question>[];
}
