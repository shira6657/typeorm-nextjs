import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Question } from './Question';

@Entity({ name: 'PeriodicQuestions' })
export class PeriodicQuestion {
  @PrimaryColumn({ name: 'questionId' })
  QuestionId!: number;

  @Column({
    name: 'creationDate',
    type: 'date',
    default: () => 'GETDATE()',
  })
  CreationDate!: Date;

  @Column({ name: 'lastRevisitedDate', type: 'datetime', nullable: true })
  LastRevisitedDate?: Date;

  @Column({ name: 'lastModifiedDate', type: 'datetime', nullable: true })
  LastModifiedDate?: Date;

  @Column({ name: 'userId', type: 'varchar', length: 255 })
  UserId!: string;

  @ManyToOne(() => Question, (question) => question.PeriodicQuestions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'questionId' })
  Questions!: Relation<Question>;
}
