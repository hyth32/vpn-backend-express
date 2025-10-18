import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Price } from './price.entity'
import { Order } from './order.entity'

@Entity()
export class Period {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column('float')
    value: number

    @Column('float', { nullable: true })
    discount: number

    @OneToMany(() => Price, price => price.period)
    prices: Price[]

    @OneToMany(() => Order, order => order.period)
    orders: Order[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt?: Date
}
