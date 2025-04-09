import { Entity, PrimaryColumn, Column, OneToMany, ManyToOne, JoinColumn, Relation } from 'typeorm';
import { Users2Roles } from './Users2Roles';
import { Transaction } from './Transaction';
import { OperationalLog } from './OperationalLog';
import { Organization } from './Organization';
import type { Relation as TypeRelation } from 'typeorm';

@Entity({ name: 'Users', schema: 'lawmate_management' })
export class User {

    @PrimaryColumn({ type: 'varchar', length: 255, name: 'email' })
    Email!: string;

    @Column({ type: 'int', name: 'org_id' })
    OrgId!: number;

    @Column({ type: 'varchar', length: 10, nullable: true, name: 'phone' })
    Phone!: string;

    @Column({ type: 'varchar', nullable: true, name: 'subscription_type' })
    SubscriptionType!: string | null;

    @Column({ type: 'date', nullable: true, name: 'expiration_date' })
    ExpirationDate!: Date | null;

    @Column({ type: 'date', nullable: true, name: 'subscription_date' })
    SubscriptionDate!: Date | null;

    @Column({ type: 'int', nullable: true, name: 'is_renewing' })
    IsRenewing!: number | null;

    @OneToMany(() => Users2Roles, users2Roles => users2Roles.User, {
        cascade: ["insert"],
    })
    Users2Roles!: Relation<Users2Roles>[];

    @OneToMany(() => Transaction, transaction => transaction.User)
    Transactions!: Relation<Transaction>[];

    @OneToMany(() => OperationalLog, operationalLog => operationalLog.User)
    OperationalLogs!: Relation<OperationalLog>[];

    @ManyToOne(() => Organization, Organization => Organization.Users)
    @JoinColumn({ name: 'org_id', referencedColumnName: 'OrgId' })
    Organization!: TypeRelation<Organization>;
}
