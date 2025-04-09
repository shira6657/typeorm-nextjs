import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
  OneToOne
} from 'typeorm';
import { Question } from './Question';
import type { Relation } from 'typeorm';
import { CaseArguments2Arguments } from './CaseArguments2Arguments';

@Entity({ name: "LegalArgument" })
@Index('IDX_userId', ['UserId']) // Index for userId
export class LegalArgument {
  @PrimaryGeneratedColumn({ name: 'id' })
  Id!: number;

  @Column({ name: 'userId', type: 'nvarchar', length: 255 })
  UserId!: string;

  @Column({ name: 'title', type: 'nvarchar', length: 255 })
  Title!: string;

  @Column({ name: 'argument', type: 'nvarchar', nullable: true })
  Argument!: string;

  @Column({ name: 'argumentEng', type: 'varchar', nullable: true })
  ArgumentEng!: string;

  @Column({ name: 'answer', type: 'nvarchar', nullable: true })
  Answer!: string;

  @Column({ name: 'answerEng', type: 'varchar', nullable: true })
  AnswerEng!: string;

  @Column({
    name: 'creationDate',
    type: 'datetime',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  CreationDate?: Date;

  @OneToMany(() => Question, (questions) => questions.LegalArguments)
  Questions!: Relation<Question>[];

  @OneToMany(() => CaseArguments2Arguments, (caseArguments2Arguments) => caseArguments2Arguments)
  CaseArguments2Arguments!: Relation<CaseArguments2Arguments>[];
}
