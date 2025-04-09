import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Relation
} from 'typeorm';
import type { Relation as RelationType } from 'typeorm';
import { Answer2Table } from './Answer2Table';
import { Question } from './Question';

@Entity({ name: "Answers" })
export class Answer {
  @PrimaryGeneratedColumn({ name: 'AnswerId' })
  AnswerId!: number;

  @Column({ name: 'QuestionId' })
  QuestionId!: number;

  @Column({ name: 'AnswerEng', type: 'varchar', length: 'MAX' })
  AnswerEng!: string;

  @Column({ name: 'Answer', type: 'nvarchar', length: 'MAX' })
  Answer!: string;

  @Column({ name: 'Reaction', type: 'int', nullable: true })
  Reaction?: number | null;

  @Column({ name: 'Comment', type: 'nvarchar', nullable: true })
  Comment?: string;

  @Column({ name: 'AnswerType', type: 'nvarchar', length: 50, nullable: true })
  AnswerType?: string;

  @OneToMany(() => Answer2Table, (Answer2Table) => Answer2Table.Answer, { cascade: ["insert"], })
  Answer2Table!: Relation<Answer2Table>[];

  @ManyToOne(() => Question, (question) => question.Answers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'QuestionId' })
  Questions!: RelationType<Question>;
}
