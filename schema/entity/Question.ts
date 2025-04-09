import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  Index,
  Relation
} from 'typeorm';
import type { Relation as TypeRelation } from 'typeorm';
import { Answer } from './Answer';
import { Conversation } from './Conversation';
import { LegalArgument } from './LegalArgument';
import { Question2Table } from './Question2Table';
import { PeriodicQuestion } from './PeriodicQuestion';

@Entity({ name: 'Questions' })
@Index('IDX_Questions_UserId', ['UserId'])
export class Question {
  @PrimaryGeneratedColumn({ name: 'QuestionId' })
  QuestionId!: number;

  @Column({ type: 'int' })
  ConvId!: number;

  @Column({ type: 'varchar', length: 255 })
  UserId!: string;

  @Column({ type: 'nvarchar', length: 'MAX' })
  Question!: string;

  @Column({ type: 'varchar', length: 'MAX' })
  QuestionEng!: string;

  @Column({ type: 'varchar', length: 'MAX', nullable: true })
  ActualQuestion?: string;

  @Column({ type: 'datetime' })
  CreationDate!: Date;

  @ManyToOne(() => Conversation, (conversation) => conversation.Questions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'ConvId' })
  Conversation!: TypeRelation<Conversation>;

  @OneToMany(() => Answer, (answers) => answers.Questions, { cascade: ["insert"], })
  Answers!: Relation<Answer>[];

  @OneToMany(() => LegalArgument, (legalArgument) => legalArgument.Questions)
  LegalArguments!: Relation<LegalArgument>[];

  @OneToMany(() => Question2Table, (question2Table) => question2Table.Question)
  Question2Table!: Relation<Question2Table>[];

  @OneToMany(() => PeriodicQuestion, (periodicQuestions) => periodicQuestions.Questions)
  PeriodicQuestions!: Relation<PeriodicQuestion>[];

}
