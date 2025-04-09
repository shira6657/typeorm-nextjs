import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Question } from './Question';

@Entity({ name: "Question2Table" })
export class Question2Table {
  @PrimaryColumn({ name: 'questionId', type: 'int' })
  QuestionId!: number;

  @PrimaryColumn({ name: 'tableName', type: 'varchar', length: 100 })
  TableName!: string;

  @PrimaryColumn({ name: 'tableId', type: 'int' })
  TableId!: number;

  @PrimaryColumn({ name: 'creationDate', type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  CreationDate!: Date;

  @Column({ name: 'chunkOrder', type: 'int' })
  ChunkOrder!: number;

  @Column({ name: 'chunkScore', type: 'float' })
  ChunkScore!: number;

  @ManyToOne(() => Question, (question) => question.Question2Table, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'questionId' })
  Question!: Relation<Question>;
}
