import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Organization } from './Organization';
import type { Relation as TypeRelation } from 'typeorm';

@Entity({name:"InvoiceDetails", schema: 'lawmate_management' })
export class InvoiceDetails {

    @PrimaryColumn({ type: 'nvarchar', length: 255, name: 'id_number' })
    IdNumber!: string;

    @Column({ type: 'nvarchar', length: 255, name: 'name' })
    Name!: string;

    @Column({ type: 'nvarchar', length: 255, name: 'email' })
    Email!: string;

    @Column({ type: 'nvarchar', length: 255, nullable: true, name: 'contact_person' })
    ContactPerson!: string;

    @Column({ type: 'nvarchar', length: 255, nullable: true, name: 'address' })
    Address!: string;

    @Column({ type: 'nvarchar', length: 255, nullable: true, name: 'city' })
    City!: string;

    @Column({ type: 'nvarchar', length: 255, nullable: true, name: 'phone' })
    Phone!: string;

    @Column({ type: 'int', unique: true, name: 'org_id' })
    OrgId!: number;

    @OneToOne(() => Organization, Organization => Organization.InvoiceDetails)
    @JoinColumn({ name: 'org_id', referencedColumnName: 'OrgId' })
    Organization!: TypeRelation<Organization>;
}
