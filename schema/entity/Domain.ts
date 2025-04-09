import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Organization } from './Organization';
import type { Relation as TypeRelation } from 'typeorm';

@Entity({ name: "Domains", schema: 'lawmate_management' })

export class Domain {

    @PrimaryColumn({ type: 'varchar', length: 255, name: 'domain' })
    Domain!: string;

    @Column({ type: 'varchar', length: 255, name: 'providerId' })
    ProviderId!: string;

    @Column({ type: 'int', unique: true, name: 'organization' })
    OrgId!: number;

    @Column({ type: 'int', name: 'allow_new_users' })
    AllowNewUsers!: number;

    @ManyToOne(() => Organization, Organization => Organization.Domains)
    @JoinColumn({ name: 'organization', referencedColumnName: 'OrgId' })
    Organization!: TypeRelation<Organization>;
}
