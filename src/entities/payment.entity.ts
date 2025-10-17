import {
    Column,
    CreateDateColumn,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Order } from './order.entity'

@Entity()
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    externalId: string

    @Column()
    status: string

    @Column('float')
    amount: number

    @Column()
    currency: string

    @Column({ default: false })
    test: boolean

    @OneToOne(() => Order, order => order.payment)
    order: Order

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
