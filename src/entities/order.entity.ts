import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Payment } from './payment.entity'
import { User } from './user.entity'
import { Region } from './region.entity'
import { Period } from './period.entity'
import { Key } from './key.entity'

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => Payment, payment => payment.order)
    payment: Payment

    @ManyToOne(() => User, user => user.orders)
    user: User

    @ManyToOne(() => Region, region => region.orders)
    region: Region

    @ManyToOne(() => Period, period => period.orders)
    period: Period

    @OneToMany(() => Key, key => key.order)
    keys: Key[]

    @OneToOne(() => Key, { nullable: true })
    @JoinColumn()
    freeKey?: Key

    @OneToOne(() => Key, { nullable: true })
    @JoinColumn()
    renewalKey?: Key

    @Column()
    externalId: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
