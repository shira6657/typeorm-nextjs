import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CaseSummary } from './CaseSummary';
import type { Relation } from 'typeorm';
// import { CaseSummary } from './CaseSummary'; // Assuming CaseSummary is another entity

@Entity({ name: "File2CaseSummary" })
export class File2CaseSummary {

    @Column({ type: 'nvarchar', length: 255, name: 'displayName' })
    DisplayName!: string;

    @PrimaryColumn({ type: 'varchar', length: 255, name: 'filePath' })
    FilePath!: string;

    @Column({ type: 'varchar', length: 10, nullable: true, name: 'side' })
    Side!: string;

    @PrimaryColumn({ type: 'int', name: 'caseSummaryId' })
    CaseSummaryId!: number;

    @ManyToOne(() => CaseSummary, caseSummary => caseSummary.File2CaseSummary, { onUpdate: 'NO ACTION' })
    @JoinColumn({ name: 'caseSummaryId' })
    CaseSummary!: Relation<CaseSummary>;
}


// import { EntitySchema } from "typeorm";
// import type { ICaseSummary } from "./CaseSummary";

// export interface IFile2CaseSummary {
//   DisplayName: string;
//   FilePath: string;
//   Side: string | null;
//   CaseSummaryId: number;
//   CaseSummary: ICaseSummary;
// }

// export const File2CaseSummary = new EntitySchema<IFile2CaseSummary>({
//   name: "File2CaseSummary",
//   tableName: "File2CaseSummary",
//   columns: {
//     DisplayName: {
//       type: "nvarchar",
//       length: 255,
//       name: "displayName",
//     },
//     FilePath: {
//       primary: true,
//       type: "varchar",
//       length: 255,
//       name: "filePath",
//     },
//     Side: {
//       type: "varchar",
//       length: 10,
//       name: "side",
//       nullable: true,
//     },
//     CaseSummaryId: {
//       primary: true,
//       type: "int",
//       name: "caseSummaryId",
//     },
//   },
//   relations: {
//     CaseSummary: {
//       type: "many-to-one",
//       target: "CaseSummary",
//       joinColumn: {
//         name: "caseSummaryId",
//         referencedColumnName: "Id",
//       },
//       inverseSide: "File2CaseSummary",
//     },
//   },
// });
