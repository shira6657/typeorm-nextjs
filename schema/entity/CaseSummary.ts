import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, Index, Relation } from 'typeorm';
import { File2CaseSummary } from './File2CaseSummary';

@Entity({ name: 'CaseSummary' })
@Index(['UserId'])
export class CaseSummary {

    @PrimaryGeneratedColumn({ name: 'id' })
    Id!: number;

    @Column({ type: 'nvarchar', length: 255, name: 'userId' })
    UserId!: string;

    @Column({ type: 'nvarchar', length: 255, name: 'title' })
    Title!: string;

    @Column({ type: 'nvarchar', length: 'MAX', name: 'answer' })
    Answer!: string;

    @Column({ type: 'varchar', length: 10, nullable: true, name: 'userSide' })
    UserSide!: 'A' | 'B' | null;

    @CreateDateColumn({
        type: 'datetime',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP',
    })
    CreationDate!: Date;

    @Column({ type: 'int', name: 'isDeleted' })
    IsDeleted!: number;

    @OneToMany(() => File2CaseSummary, file2CaseSummary => file2CaseSummary.CaseSummary, { cascade: ["insert", "remove"] })
    File2CaseSummary!: File2CaseSummary[];
}

// import { EntitySchema } from "typeorm";
// import type { IFile2CaseSummary } from "./File2CaseSummary";

// export interface ICaseSummary {
//   Id: number;
//   UserId: string;
//   Title: string;
//   Answer: string;
//   UserSide: 'A' | 'B' | null;
//   CreationDate: Date;
//   IsDeleted: number;
//   File2CaseSummary: IFile2CaseSummary[];
// }

// export const CaseSummary = new EntitySchema<ICaseSummary>({
//   name: "CaseSummary",
//   tableName: "CaseSummary",
//   indices: [
//     {
//       name: "IDX_UserId",
//       columns: ["UserId"],
//     },
//   ],
//   columns: {
//     Id: {
//       primary: true,
//       type: "int",
//       generated: true,
//       name: "id",
//     },
//     UserId: {
//       type: "nvarchar",
//       length: 255,
//       name: "userId",
//     },
//     Title: {
//       type: "nvarchar",
//       length: 255,
//       name: "title",
//     },
//     Answer: {
//       type: "nvarchar",
//       length: "MAX",
//       name: "answer",
//     },
//     UserSide: {
//       type: "varchar",
//       length: 10,
//       name: "userSide",
//       nullable: true,
//     },
//     CreationDate: {
//       type: "datetime",
//       name: "CreationDate",
//       nullable: true,
//       default: () => "CURRENT_TIMESTAMP",
//     },
//     IsDeleted: {
//       type: "int",
//       name: "isDeleted",
//     },
//   },
//   relations: {
//     File2CaseSummary: {
//       type: "one-to-many",
//       target: "File2CaseSummary",
//       inverseSide: "CaseSummary",
//       cascade: ["insert", "remove"],
//     },
//   },
// });
